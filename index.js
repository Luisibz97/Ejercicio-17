var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.6492593,-0.8898265,17]).addTo(map)
    .bindPopup('Market 1. Zaragoza')
    .openPopup();

L.marker([-28.4432041,-65.7677975,17]).addTo(map)
    .bindPopup('Market 2. Parque America')
    .openPopup();

L.marker([36.2152285,-115.1556911]).addTo(map)
    .bindPopup('Market 3. Las Vegas')
    .openPopup();
    