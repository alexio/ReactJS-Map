var map = L.map('map').setView([40.68488, -73.89429], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

L.marker([40.72488, -73.99429]).addTo(map)
    .bindPopup(popupTemplate(stringerData))
    .openPopup();