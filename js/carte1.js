var map = d3.geomap()
    .geofile('countries.json');

d3.select('#map')
    .call(map.draw, map);
