var config = {
    apiKey: "AIzaSyDxE9wqGVNr3IUrDQyDK1qtG0C0sB0YqKQ",
    authDomain: "potholes-sf.firebaseapp.com",
    databaseURL: "https://potholes-sf.firebaseio.com",
    projectId: "potholes-sf",
    storageBucket: "potholes-sf.appspot.com",
    messagingSenderId: "277599364088"
};
firebase.initializeApp(config);
const db = firebase.firestore();

const settings = {
    timestampsInSnapshots: true
};

db.settings(settings);

async function getLatLongArray() {
    var array = [];
    await db.collection("TestPotholeLocations").get().then((snapshot) => {
        snapshot.forEach(doc => {
            var position = doc.data();
            array.push([position['latitude'], position['longitude']]);
        });
    });
    return array;
}
var latLongArray = getLatLongArray()
console.log(latLongArray);