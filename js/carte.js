
$.getJSON('https://ckisam.github.io/data/paysXattentats.json', function (data) {

  var optionsZeMap =  {
    chart: {
      renderTo: 'zeMap',
      borderWidth: 0,
      map: 'custom/world'
    },

    title: {
      text: "Nombre d'attentats depuis 1970"
    },

    //subtitle: { text: 'Demo of Highcharts map with bubbles' },

    legend: {
      enabled: false
    },

    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    series: [{
      name: 'Countries',
      color: '#E0E0E0',
      enableMouseTracking: false
    }, {
      type: 'mapbubble',
      name: "Nombre d'attentats",
      joinBy: ['iso-a3', 'code3'],
      data: data,
      color: "#f78757",
      marker: {},
      minSize: 1,
      maxSize: '15%',
      tooltip: {
        pointFormat: '{point.properties.name}: {point.z}'
      },
      states: {
        hover: {
          enabled: true
        }
      }
    }],

    credits: {
      enabled: false
    },

    exporting: {
      enabled: false
    }
  };

  var chartZeMap = new Highcharts.mapChart(Highcharts.merge(optionsZeMap, darkTheme));
});
