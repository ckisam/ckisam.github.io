### Projet de Dataviz
### Exploration des données


# Préliminaires
###############

setwd('/Users/flavienganter/Dropbox/3A/Dataviz/GTD_0617dist')

# Packages
library(readxl)

# Importation des données
gtd <- read_excel("globalterrorismdb_0617dist.xlsx",col_names = TRUE)

# Régions du monde
gtd$regionr[gtd$region_txt=="Australasia & Oceania"] <- "Autres"
gtd$regionr[gtd$region_txt=="Central America & Caribbean"] <- "Amérique centrale"
gtd$regionr[gtd$region_txt=="South Asia"|gtd$region_txt=="Southeast Asia"] <- "Asie méridionale"
gtd$regionr[gtd$region_txt=="East Asia"|gtd$region_txt=="Central Asia"] <- "Asie septentrionale"
gtd$regionr[gtd$region_txt=="Western Europe"|gtd$region_txt=="Eastern Europe"] <- "Europe"
gtd$regionr[gtd$region_txt=="Middle East & North Africa"] <- "Middle East & North Africa"
gtd$regionr[gtd$region_txt=="North America"] <- "North America"
gtd$regionr[gtd$region_txt=="South America"] <- "South America"
gtd$regionr[gtd$region_txt=="Sub-Saharan Africa"] <- "Sub-Saharan Africa"

# Décennies
gtd$dec <- "0"
gtd[gtd$iyear<1980,]$dec <- "1970s"
gtd[gtd$iyear<1990 & gtd$iyear>=1980,]$dec <- "1980s"
gtd[gtd$iyear<2000 & gtd$iyear>=1990,]$dec <- "1990s"
gtd[gtd$iyear<2010 & gtd$iyear>=2000,]$dec <- "2000s"
gtd[gtd$iyear>=2010,]$dec <- "2010s"


# Analyses
##########

# Évolution globale
yearcount = data.frame(table(gtd$iyear))
yearcount$Var1 = as.integer(as.character(yearcount$Var1))
plot(yearcount$Var1, yearcount$Freq, type="l")

# Répartition par région du monde
regioncount = data.frame(table(gtd$region_txt))
barplot(regioncount$Freq, names.arg=regioncount$Var1, las=2)

# Évolution de la répartition par région du monde
regyrcount = data.frame(table(gtd$regionr,gtd$iyear))
regyrcount = reshape(regyrcount, idvar = "Var1", timevar = "Var2", direction = "wide")
barplot(as.matrix(regyrcount))
for (i in 2:47){
  regyrcount[,i] = regyrcount[,i]/sum(regyrcount[,i])
}
barplot(as.matrix(regyrcount[,2:47]),las=2,col=1:12)
legend("topright",
       legend = regyrcount[,1], 
       fill = 1:12, ncol = 2,
       cex = 0.75)

# Évolution du nombre de victimes
victy = aggregate(gtd$nkill, by=list(Category=gtd$iyear), FUN=sum, na.rm=TRUE, na.action=NULL)
plot(victy$Category, victy$x, type="l")
evol = cbind(yearcount,victy)
evol$relat = evol$x/evol$Freq
plot(evol$Category, evol$relat, type="l")

# Évolution de la répartition par région du monde du nombre de victimes
victregyr = aggregate(gtd$nkill, by=list(year=gtd$iyear, region=gtd$regionr), FUN=sum, na.rm=TRUE, na.action=NULL)
victregyr = reshape(victregyr, idvar = "region", timevar = "year", direction = "wide")
victregyr[is.na(victregyr)] <- 0
for (i in 2:47){
  victregyr[,i] = victregyr[,i]/sum(victregyr[,i])
}
barplot(as.matrix(victregyr[,2:47]),las=2,col=1:12)
legend("topright",
       legend = victregyr[,1], 
       fill = 1:12, ncol = 2,
       cex = 0.75)

# Organisations les plus actives
View(table(gtd[gtd$iyear>=2010,]$gname))
orgcount = data.frame(table(gtd$gname))
barplot(orgcount$Freq, names.arg=orgcount$Var1, las=2)

# Saisonnalité
monthcount = data.frame(table(gtd$imonth))
barplot(monthcount$Freq, names.arg=monthcount$Var1, las=2)

# Évolution des types d'attaques
typcount = data.frame(table(gtd$attacktype1_txt,gtd$dec))
typcount = reshape(typcount, idvar = "Var1", timevar = "Var2", direction = "wide")
for (i in 2:47){
  typcount[,i] = typcount[,i]/sum(typcount[,i])
}
barplot(as.matrix(typcount[,2:47]),las=2,col=1:9)
typleg = c("Assassination","Hijacking","Kidnapping","Barricade Incident","Bombing/Explosion","Armed Assault","Unarmed Assault","Facility/Infrastructure Attack","Unknown")
legend("topright",
       legend = typleg, 
       fill = 1:9, ncol = 2,
       cex = 0.75)

# Évolution des types d'armes
weapcount = data.frame(table(gtd$weaptype1,gtd$iyear))
weapcount = reshape(weapcount, idvar = "Var1", timevar = "Var2", direction = "wide")
for (i in 2:47){
  weapcount[,i] = weapcount[,i]/sum(weapcount[,i])
}
barplot(as.matrix(weapcount[,2:47]),las=2,col=1:13)
typweap = c("Biological","Chemical","Radiological","Nuclear","Firearms","Explosives/Bombs/Dynamite","Fake Weapons","Incendiary","Melee","Vehicle","Sabotage Equipment","Other","Unknown")
legend("topright",
       legend = typweap, 
       fill = 1:13, ncol = 2,
       cex = 0.75)
