
$(function () {
    var myChart = Highcharts.chart('map_evol', {
    chart: {
        type: 'area'
    },
    title: {
        text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
        categories: [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
        tickInterval: 5,
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: '%'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} attentats)<br/>',
        split: true
    },
    plotOptions: {
        area: {
            stacking: 'percent',
            lineColor: '#ffffff',
            lineWidth: 1,
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Europe',
        data: [61,129,356,291,318,438,579,773,731,1020,596,488,405,477,545,471,458,418,493,460,448,780,860,679,405,651,597,246,374,487,486,232,221,104,175,168,134,372,346,393,291,363,419,1180,1019,401]
    }, {
        name: 'Amérique du Nord',
        data: [472,247,69,64,111,159,125,149,117,79,75,76,86,47,67,44,53,35,30,44,37,40,41,102,94,111,137,36,56,41,48,33,33,12,21,15,19,31,15,24,12,38,32,34,63,72]
    }, {
        name: 'Amérique du Sud',
        data: [65,24,20,83,81,55,91,119,222,236,319,383,639,950,1492,1040,1184,1265,1041,1385,1076,1322,1204,373,255,517,774,108,134,150,229,162,117,42,49,50,47,144,159,148,106,133,179,282,175,133]
    }, {
        name: 'Amérique centrale et Caraïbes',
        data: [7,5,3,6,11,9,45,24,199,609,1070,1148,996,858,681,780,393,566,495,503,316,729,212,180,168,116,117,1,8,14,8,3,8,5,3,5,4,0,9,1,1,1,14,5,1,3]
    }, {
        name: 'Maghreb et Moyen Orient',
        data: [29,55,35,19,42,44,55,211,128,455,437,312,291,334,268,133,196,202,246,464,494,612,1193,1051,590,373,550,247,316,272,362,327,295,488,883,1178,1385,1535,1361,1463,1663,2408,4546,6919,5956,6088]
    }, {
        name: 'Afrique subsaharienne',
        data: [3,2,0,4,7,12,10,29,46,124,58,98,60,106,126,141,185,174,337,291,450,271,571,433,239,217,279,87,143,191,162,121,73,35,59,114,302,380,283,331,494,1156,989,2308,1939,2051]
      }, {
        name: 'Asie du sud',
        data: [11,6,11,3,5,11,16,10,46,120,99,73,63,85,290,289,375,511,1042,1129,949,883,824,527,1219,930,650,168,332,612,570,442,498,464,806,1210,1345,2272,2506,2451,2491,4385,5795,6072,5648,4706]
    }, {
        name: 'Autres',
        data: [3,2,2,3,4,12,2,4,37,18,8,7,5,13,26,17,16,13,36,47,117,46,168,115,111,141,96,40,32,46,42,12,17,12,13,9,5,69,40,11,13,16,22,60,51,34]
    }]
});
});