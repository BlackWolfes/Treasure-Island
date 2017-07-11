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
      pointToLayer: function(feature, latlng) {
          var smallIcon = L.Icon({
              options: {
                  iconSize: [27, 27],
                  iconAnchor: [13, 27],
                  popupAnchor: [1, -24],
                  iconUrl: 'icone/chapel-2.png'
              }
          });
          return L.marker(latlng, { icon: smallIcon });
      },
      onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.title);
      }
  }).addTo(map);

  // Busqueda por title
  var searchControl = new L.Control.Search({
      layer: PuntosGeo,
      propertyName: 'title',
      circleLocation: false
  });
  searchControl.on('search_locationfound', function(e) {      
      e.layer.setStyle({ fillColor: '#3f0', color: '#0f0' });
  });
  map.addControl(searchControl);

  // Mostrar coordenadas de raton
  L.control.mousePosition().addTo(map);

  // Mostrar escala
  var graphicScale = L.control.graphicScale({
      fill: 'fill',
      minUnitWidth: 10
  }).addTo(map);
  var scaleText = L.DomUtil.create('div', 'scaleText');
  graphicScale._container.insertBefore(scaleText, graphicScale._container.firstChild);

  // Botones que marcan con polilineas los pasos a seguir
  function ruta(n) {
      var pointA = new L.latLng(PuntosRutaJSON[n - 1].geometry.coordinates[1], PuntosRutaJSON[n - 1].geometry.coordinates[0]);
      var pointB = new L.latLng(PuntosRutaJSON[n].geometry.coordinates[1], PuntosRutaJSON[n].geometry.coordinates[0]);
      var pointList = [pointA, pointB];
      console.log(pointB);
      var firstpolyline = new L.Polyline(pointList, {
          color: 'blue',
          weight: 5,
          opacity: 0.8,
          smoothFactor: 1
      });
      firstpolyline.addTo(map);
  };

  // Boton que marca el reocrrido desde el punto 1 al ultimo
  function rutaCoche() {
      var existeRuta = L.Routing.control({
          waypoints: [
              L.latLng(PuntosRutaJSON[0].geometry.coordinates[1], PuntosRutaJSON[0].geometry.coordinates[0]),
              L.latLng(PuntosRutaJSON[10].geometry.coordinates[1], PuntosRutaJSON[10].geometry.coordinates[0])
          ],
          routeWhileDragging: false
      }).addTo(map);
  };
