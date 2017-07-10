  // Valores iniciales mapa
  var map = L.map('map', {
      center: [40.9612, -5.66387],
      zoom: 15
  });

  // Mapa base Pirates
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmxhY2t3b2xmZXMiLCJhIjoiY2lwOGRna3VtMDAwcXhxbTd4MXNkcGYzciJ9.-y9jRhzTHMKsnKt_b3tFnQ', {
      maxZoom: 20,
      minZoom: 14,
      attribution: '<a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.pirates'
  }).addTo(map);

  // Mostramos los puntos de GeoJSON en datos.js
    var PuntosGeo = L.geoJson(PuntosRutaJSON, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.title);
        }
    }).addTo(map);

  // Mostrar coordenadas de raton
  L.control.mousePosition().addTo(map);

  // Mostrar escala
  var graphicScale = L.control.graphicScale({
      fill: 'fill',
      minUnitWidth: 10
  }).addTo(map);

  var scaleText = L.DomUtil.create('div', 'scaleText');
  graphicScale._container.insertBefore(scaleText, graphicScale._container.firstChild);


function ruta(n){

   var existeRuta =  L.Routing.control({
    waypoints: [
        L.latLng(PuntosRutaJSON[n-1].geometry.coordinates[1] , PuntosRutaJSON[n-1].geometry.coordinates[0]),
        L.latLng(PuntosRutaJSON[n].geometry.coordinates[1] , PuntosRutaJSON[1].geometry.coordinates[0])
    ],
    routeWhileDragging: false
  }).addTo(map);


};

