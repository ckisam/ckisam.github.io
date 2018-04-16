$(function () {
    var myChart = Highcharts.chart('organ', {
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  series: [{
    keys: ['from', 'to', 'weight'],
    data: [
      ['Brazil', 'Brazil ', 1 ],
      ['France', 'France ', 1 ],
      ['Spain', 'Spain ', 1 ],
      ['Germany', 'Germany ', 1 ],
      ['France ', 'France  ', 1 ],
      ['Spain ', 'Spain  ', 1 ],
      ['Germany ', 'Germany  ', 1 ],
      ['Germany  ', 'Germany   ', 1 ],
      ['France  ', 'France   ', 1 ],
      ['Spain  ', 'Spain   ', 1 ],
      ['Italy', 'Italy ', 1 ]
    ],
    type: 'sankey',
    name: 'Sankey demo series'
  }]

});
});
