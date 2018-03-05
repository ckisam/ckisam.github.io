$(function(){

var ctx = document.getElementById("chart-evolution-nb-attentats").getContext('2d');
var myChart = new Chart(ctx, {
	// Type :
    type: 'line',
	// Donnees :
	data: {
        labels: [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
        datasets: [{
            label: "Nombre d'attentats",
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [651,470,496,473,580,740,923,1319,1526,2661,2662,2585,2545,2870,3495,2915,2860,3184,3720,4323,3887,4683,5073,0,3458,3081,3056,3200,933,1395,1813,1907,1332,1262,1162,2009,2749,3241,4803,4719,4822,5071,8500,11996,16860,14852,13488],
        }]
    },
	// Options :
    options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
				}
			}]
		}
	}
});

});