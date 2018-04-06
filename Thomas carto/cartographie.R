
#setwd("/Users/julio/Desktop/TM_WORLD_BORDERS_SIMPL-0")

library(maptools)
library(ggplot2)
library(dplyr)


rm(list = ls())
setwd("/Volumes/Macintosh HD/Users/thomasbourdais/Documents/Etudes/2017-ENSAE 3A/Dataviz/")

##################################
# Shapefile
#################################
#monde
monde<-readShapeSpatial("TM_WORLD_BORDERS_SIMPL-0/TM_WORLD_BORDERS_SIMPL-0.3.shp",
                         proj4string=CRS("+proj=longlat"))

shape <- merge(fortify(monde), as.data.frame(monde), by.x="id", by.y=0)
shape <- shape[,c("NAME","id","group","long","lat","order","hole","piece")]
colnames(shape)[colnames(shape)=="NAME"] <- "countryname"

#France
france<-readShapeSpatial("regions-20180101-shp/regions-20180101.shp",
                        proj4string=CRS("+proj=longlat"))

shape_fr <- merge(fortify(france), as.data.frame(france), by.x="id", by.y=0)


##################################
# Attentats
##################################

A <- readRDS("attentats.rds")
#write.csv(A, file = "attentats.csv",row.names=FALSE)

colnames(A)[colnames(A)=="country_txt"] <- "countryname"
A <- A[A$iyear == 2001,c("countryname","nkill","iyear", "latitude", "longitude")]
A$latitude <- as.numeric(gsub(",", ".", as.character(A$latitude)))
A$longitude <- as.numeric(gsub(",", ".", as.character(A$longitude)))

#pour coloration du pays
A_pays <- A %>% filter(!is.na(nkill)) %>%
           group_by(countryname, iyear) %>%
           summarise(nkill = sum(nkill))

##################################
# Carte
##################################

data <- merge(A_pays, shape, by = "countryname",
              all.y = TRUE)
data <- data[order(data$id, data$group, data$order),]

ggplot() +
  geom_polygon(data = shape, #%>% filter(countryname =="France"),
               aes(x = long,
                   y = lat,
                   group = group),
                   color = "black",
                   fill = "white") +
  #ajout des applats de couleur
  # geom_polygon(data = data %>% filter(nkill>0),
  #              aes(x = long,
  #                  y = lat,
  #                  group = group,
  #                  fill = nkill),
  #             color = "black") +
  #Ajout des points
  geom_point(data = A, #%>% filter(countryname =="France"),
               aes(x = longitude,
                   y = latitude,
               color = "red",
               cex = nkill)) +
  theme(panel.border = element_blank(),
        panel.grid.major = element_blank(), 
        panel.grid.minor = element_blank(),
        panel.background = element_blank(),
        axis.line.x = element_blank(),
        axis.line.y = element_blank(),
        axis.title.x=element_blank(),
        axis.title.y=element_blank(),
        axis.text.x=element_blank(),
        axis.text.y=element_blank(),
        axis.ticks.x=element_blank(),
        axis.ticks.y=element_blank())


###################
#reste de juju
# B<-merge(data,A,by="countryname")
# 
# head(B)
# selec <- subset(B, select=c(countryname, country, LON, LAT,iyear,nkill))
# 
# selec1985<- subset(selec, iyear==1985)
# 
# 
# for (i in 1:nrow(selec1985)){
#   points(selec1985[i,3],selec1985[i,4],pch=20,col="red",cex=1)
# }
# 
# 
