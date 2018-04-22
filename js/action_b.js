$(function () {

    var myChart = Highcharts.chart('action', {
      chart: {
          type: 'column'
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
          categories: ["1970's", "1980's", "1990's", "2000's", "2010's"]
      },
      yAxis: {
          min: 0,
          title: {
              text: '%'
          }
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
          shared: true
      },
      plotOptions: {
          column: {
              stacking: 'percent'
          }
      },
      series: [{
          name: 'Assauts armés',
          data: [1424,7702,7127,6312,17658]
      }, {
          name: "Attaques à l'explosif",
          data: [4317,14137,10897,13415,40307]
      }, {
          name: 'Assassinats',
          data: [1927,5166,5201,1444,4664]
      }, {
          name: "Destruction d'infrastructures",
          data: [1096,1561,2029,1330,3565]
      }, {
          name: "Prises d'hotage",
          data: [707,1449,1601,1719,5659]
      }, {
          name: "Autres",
          data: [368,1144,1911,777,3736]
      },]
});

    var myChart = Highcharts.chart('weapon', {
    chart: {
        type: 'column'
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
        categories: ["1970's", "1980's", "1990's", "2000's", "2010's"]
    },
    yAxis: {
        min: 0,
        title: {
            text: '%'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Explosifs',
        data: [4417,13969,11078,13733,43507]
    }, {
        name: "Armes à feu",
        data: [2993,12127,10770,7854,21529]
    }, {
        name: 'Dispositifs incendiaires',
        data: [1302,1802,2810,1340,3205]
    }, {
        name: "Armes de contact",
        data: [82,233,1199,520,1304]
    }, {
        name: "Autres",
        data: [133,298,1343,702,1586]
    },]
});

});
