//Map dimensions (in pixels)
var width = 600,
    height = 350;

//Map projection
var projection = d3.geoAlbersUsa()
    .scale(730.2209486090715)
    .translate([width/2,height/2]) //translate to center the map in view

//Generate paths based on projection
var path = d3.geoPath() 
    .projection(projection);

//Create an SVG for the map
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("float", "left");

//adding this infobox to show info about that state (another svg)
var infoBox = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("float", "left")
    .text("test");

//Group for the map features
var features = svg.append("g")
    .attr("class","features");


d3.json("us-states.json").then(function(geodata) {


  //Create a path for each map feature in the data
  features.selectAll("path")
    .data(geodata.features)
    .enter()
    .append("path")
    .attr("d",path)
    .on("click",clicked);

});

// Add optional onClick events for features here
// d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
function clicked(d,i) {
    console.log('clicked', d.properties.name)
}


