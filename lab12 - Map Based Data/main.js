//set the map and initial coordinates
var mymap = L.map('mapid').setView([0,0], 1);

//Grey Basic Map
var Esri_WorldGrayCanvas = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

Esri_WorldGrayCanvas.addTo(mymap);


//Terrain Map (Stamen.Terrain)
var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});

Stamen_Terrain.addTo(mymap);


//Shakey Button
//when the button on is clicked
$('#shakey').click(function() {
 console.log("getting quakes");
 $.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson', function(result) {
 console.log(result)

 result.features.forEach(function(quake){
   //for each earthquake
   //get its coordinates
   var lng = quake.geometry.coordinates[0];
   var lat = quake.geometry.coordinates[1];
   //and magnitude
   var mag = parseFloat(quake.properties.mag);
   //for each earthquake create a circle

   var circle = L.circle([lat,lng], mag * 10000, {
        color: 'red',
        opacity: 0,
        fillColor: 'red',
        fillOpacity: 0.8
   })
   //and add to map
   circle.addTo(mymap);
 });
 });
});


//Meteor button
//When button is clicked
$('#dropey').click(function() {
 console.log("getting drops");
 $.getJSON('https://data.nasa.gov/resource/gh4g-9sfh.json', function(result) {
 console.log(result)

 results.features.forEach(function(meteor){
   //for each meteors
   //get its coordinates
   var lng = meteor.geolocation.longitude[0];
   var lat = meteor.geometry.coordinates[1];
   var mass = parseFloat(meteor.properties.mass);

   var circle = L.circle([lat,lng], mass * 10000,{
        color: 'blue',
        opacity: 0,
        fillColor: 'blue',
        fillOpacity: 0.8
   })

 })

});
});
