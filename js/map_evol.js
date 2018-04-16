
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
    exporting: {
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
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} victimes)<br/>',
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
        data: [29,23,89,92,64,136,143,421,845,1389,1531,1635,1808,2173,1820,1577,1831,1536,1888,1392,2051,1416,553,423,633,891,109,142,164,237,165,125,47,52,55,51,144,168,149,107,134,193,287,176,136]
    }, {
        name: 'Afrique et Moyen Orient',
        data: [32,57,35,23,49,56,65,240,174,579,495,410,351,440,394,274,381,376,583,755,944,883,1764,1484,829,590,829,334,459,463,524,448,368,523,942,1292,1687,1915,1644,1794,2157,3564,5535,9227,7895,8139]
    }, {
        name: 'Asie du sud',
        data: [11,6,11,3,5,11,16,10,46,120,99,73,63,85,290,289,375,511,1042,1129,949,883,824,527,1219,930,650,168,332,612,570,442,498,464,806,1210,1345,2272,2506,2451,2491,4385,5795,6072,5648,4706]
    }, {
        name: 'Autres',
        data: [3,2,2,3,4,12,2,4,37,18,8,7,5,13,26,17,16,13,36,47,117,46,168,115,111,141,96,40,32,46,42,12,17,12,13,9,5,69,40,11,13,16,22,60,51,34]
    }]
});
});
