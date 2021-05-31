function leafletMap() {
  const map = L.map('map').setView([-30.020818, -51.1899515], 13);

  function copyAddress() {
    const popupContent = document.querySelector('.leaflet-popup-content');
    const address = 'R. Germano Petersen Júnior, 508 - 4º Andar - Auxiliadora, Porto Alegre - RS, 90540-140';
    
    function copyContent() {
      let text = popupContent.innerHTML;
      const temp = document.createElement('input');
      temp.setAttribute('value', address);
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);

      popupContent.innerHTML =
        '<p style="text-align: center;">Endereço copiado!</p>';
    }

    popupContent.addEventListener('click', copyContent);
  }

  function createMap() {
    L.tileLayer(
      'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=e7emib7hByK7fHVZN24p',
      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution:
          '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
        crossOrigin: true,
      }
    ).addTo(map);

    const marker = L.marker([-30.020818, -51.1899515]).addTo(map);
    marker.bindPopup(
      '<p style="text-align: center;">Aperte aqui para <br /> copiar nosso endereço</p>'
    ).openPopup();

    copyAddress();
  }

  createMap();
}

export default leafletMap;
