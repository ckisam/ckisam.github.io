$(function () {
    var myChart = Highcharts.chart('evol_nb_cor', {
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
            tickInterval: 5
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                format: '{value:,.0f}'
            }
        },
        series: [{
            type : 'spline',
            name: 'Attentats',
            data: [651,470,496,473,580,740,923,1319,1526,2661,2662,2585,2545,2870,3495,2915,2860,3184,3720,4323,3887,4683,5073,747,3458,3081,3056,3200,933,1395,1813,{y:1907, marker: {radius: 10, symbol: 'url(images/explosion.png)'}, name: "Attentats du 11 septembre 2001, New York"},1332,1262,1162,2009,2749,3241,4803,4719,4822,5071,8500,11996,16860,14852,13488]},
        {
            type : 'spline',
            name: 'Victimes',
            data: [171,173,566,370,542,617,672,456,1459,2100,4391,4851,5135,9444,10450,7094,4976,6476,7189,8136,7148,8429,9745,7691,6094,6965,10928,4688,3388,4402,7743,4799,3278,5718,6313,9362,12858,9135,9271,7727,8228,15436,22234,43566,38464,34676,34032]},
        {
            type : 'spline',
            name: 'Attentats (Irak et Afghanistan omis)',
            data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,754,1236,1630,1854,3283,3080,3102,3342,5595,7706,11113,10181,8517]},
        {
            type : 'spline',
            name: 'Victimes (Irak et Afghanistan omis)',
            data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,4715,2761,3292,2566,4019,4996,5182,5624,4591,4837,9229,11500,25074,23419,16370,16001],
        },]
    });
});
