
$.getJSON('https://ckisam.github.io/data/paysXattentats.json', function (data) {

  Highcharts.mapChart('zeMap', {
    chart: {
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
      minSize: 4,
      maxSize: '12%',
      tooltip: {
        pointFormat: '{point.properties.hc-a2}: {point.z} attentats'
      }
    }],

    credits: {
      enabled: false
    },

    exporting: {
      enabled: false
    }
  });
});
