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
          opacity: 100,
          draggable: true
      })
      //.on('click', markerOnClick)
      .addTo(map);

  var point06 = L.marker([40.95594, -5.65665], {
      title: "Parque de los Jerónimos",
      opacity: 100
  }).addTo(map);

  var point07 = L.marker([40.96153, -5.65665], {
      title: "Parque Huerta de los Jesuitas",
      opacity: 100
  }).addTo(map);

  var point08 = L.marker([40.96593, -5.65665], {
      title: "Calle Honduras",
      opacity: 100
  }).addTo(map);

  var point09 = L.marker([40.96593, -5.65812], {
      title: "Colegio San Juan Bosco",
      opacity: 100
  }).addTo(map);

  var point10 = L.marker([40.96657, -5.66137], {
      title: "Plaza Santa Eulalia",
      opacity: 100
  }).addTo(map);

  var point11 = L.marker([40.96702, -5.66323], {
      title: "Agencia Tributaria",
      opacity: 100
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


  // Funcion onClick
  function markerOnClick(e) {
      alert("La posicion es " + e.latlng);

  }
