  // Valores iniciales mapa
  var map = L.map('map', {
      center: [40.9612, -5.66387],
      zoom: 16
  });

  // Mapa base Pirates
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmxhY2t3b2xmZXMiLCJhIjoiY2lwOGRna3VtMDAwcXhxbTd4MXNkcGYzciJ9.-y9jRhzTHMKsnKt_b3tFnQ', {
      maxZoom: 20,
      minZoom: 14,
      attribution: '<a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.pirates'
  }).addTo(map);

  // Elementos de mapa

  var point01 = L.marker([40.96251, -5.66452], {
          title: "Calle Pan y Carbón",
          opacity: 100
      }).addTo(map);

  var point02 = L.marker([40.96238, -5.66388], {
      title: "Estatua Cristobal Colon",
      opacity: 100
  }).addTo(map);

  var point03 = L.marker([40.9601, -5.66273], {
      title: "Convento San Esteban",
      draggable: true,
      opacity: 100
  }).addTo(map);

  var point04 = L.marker([40.9584, -5.66306], {
      title: "Paseo del Rector Esperabé",
      opacity: 100
  }).addTo(map);

    var point05 = L.marker([40.9578, -5.66448], {
      title: "Colegio del Sagrado Corazón",
      opacity: 100
  }).addTo(map);



  // Mostrar coordenadas de raton
  L.control.mousePosition().addTo(map);

  // Funcion onClick
  function markerOnClick(e) {
      alert("La posicion es " + e.latlng);

  }
