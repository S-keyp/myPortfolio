let mymap = L.map('map-leaflet').setView([43.610769, 3.876716], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3Fxc2QiLCJhIjoiY2t2NTJ0N2luMmpjMTJucXc1eTE1OHMyZCJ9.JiqRgX3vqsTdtmbwR907hg'
}).addTo(mymap);

let marker1 = L.marker([43.6168134, 3.8419584]).addTo(mymap);
let marker2 = L.marker([43.58946792907757, 3.8850402832031254]).addTo(mymap);
let marker3 = L.marker([43.607742266333425, 3.886070251464844]).addTo(mymap);
let marker4 = L.marker([43.60587779232056, 3.9150810241699223]).addTo(mymap);
