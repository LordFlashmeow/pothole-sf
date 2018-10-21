var markers = new Array();
db.collection("TestPotholeLocations").get().then((snapshot) => {
    snapshot.forEach(doc => {
        // array.push([doc.data()["latitude"], doc.data()["longitude"]]);
        var position = doc.data();

        position['lat'] = position['latitude'];
        position['lng'] = position['longitude'];
        delete position['latitude'];
        delete position['longitude'];

        markers.push(new google.maps.Marker({
            position: position,
            map: map
        }))
    });

})


var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
        lat: 37.7749,
        lng: -122.4194
    }
});

// Add a marker clusterer to manage the markers.
var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});


function dummyarray() {
    return [{
        lat: 0,
        lng: 0
    }]
}