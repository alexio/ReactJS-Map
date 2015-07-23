function addStringerMarkerToMap(stringer) {
    var currentCoord = stringer.currentLocation.coordinates;
    L.marker([currentCoord[0], currentCoord[1]]).addTo(map)
        .bindPopup(popupTemplate(stringerData))
        .openPopup();
}

var stringerData = {
    "id": "METRO1234",
    "name": "TestStringer",
    "baseLocation": {
        "type": "Point",
        "coordinates": [100.0, 0.0]
    },
    "currentLocation": {
        "type": "Point",
        "coordinates": [100.0, 0.0]
    },
    "available": true/false,
    "phone": "999-999-999",
    "email": "pretezls@stringers.com",
    "contract": "date signed for yes",
    "languages": ["English", "Urdu", "Spanish", "Russian"],
    "skills": ["Social media", "photographer"]
}

var popupTemplate = _.template(
    $( "script.template" ).html()
);

$.ajax({
    url: "api/search.json",
    dataType: "json",
    contentType: "application/json",
    success: function(resp) {
        if (resp.status == "ok") {
            resp.result.forEach(function(element, index, array) {
                addStringerMarkerToMap(element);
            });
        } else {
            console.log("Error occurred", resp);
        }
    },
    error: function(resp) {
        console.log("Error occurred", resp);
    }
})