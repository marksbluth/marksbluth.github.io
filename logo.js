//testing making a svg logo for marksbluth
//
//step1 - make the initial svg
var svgColors = {
    "background": "mediumspringgreen",
    "letters": "purple"
};

var size = {
    "square": 400
};
var svgSelection = d3.select("body").append("svg")
    .attr("width", size.square)
    .attr("height", size.square);
/*
var background = svgSelection.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", size.square)
    .attr("height", size.square)
    .style("fill", svgColors.background);*/


var jsonStrokes = [{
	//green background
    "x": size.square * 0,
    "y": size.square * 0,
    "height": size.square * 1,
    "width": size.square * 1,
    "xinitial": size.square * 1,
    "yinitial": size.square * 1,
		"fill":svgColors.background
},{//left down
    "x": size.square * 0.1,
    "y": size.square * 0.1,
    "height": size.square * 0.4,
    "width": size.square * 0.1,
    "xinitial": size.square * 0.45,
    "yinitial": size.square * 0.1,
		"heightinitial": size.square * 0.4,
		"widthinitial": size.square * 0.1,
		"fill":"black"
}, {//middle down
    "x": size.square * 0.45,
    "y": size.square * 0.1,
    "height": size.square * 0.8,
    "width": size.square * 0.1,
    "xinitial": size.square * 0.45,
    "yinitial": size.square * 0.1,
		"heightinitial": size.square * 0.8,
		"widthinitial": size.square * 0.1,
		"fill":"black"
}, {//right down
    "x": size.square * 0.8,
    "y": size.square * 0.5,
    "height": size.square * 0.4,
    "width": size.square * 0.1,
    "xinitial": size.square * 0.45,
    "yinitial": size.square * 0.1,
		"heightinitial": size.square * 0.4,
		"widthinitial": size.square * 0.1,
		"fill":"black"
}, {//middle to right across top
    "x": size.square * 0.5,
    "y": size.square * 0.5,
    "height": size.square * 0.1,
    "width": size.square * 0.3,
    "xinitial": size.square * 0.45,
    "yinitial": size.square * 0.1,
		"heightinitial": size.square * 0.4,
		"widthinitial": size.square * 0.1,
		"fill":"black"
}, {//middle to right across bottom - present in transition
    "x": size.square * 0.5,
    "y": size.square * 0.8,
    "height": size.square * 0.1,
    "width": size.square * 0.3,
    "xinitial": size.square * 0.1,
    "yinitial": size.square * 0.8,
		"heightinitial": size.square * 0.1,
		"widthinitial": size.square * 0.2,
		"fill":"black"
}, {//left top middle down
    "x": size.square * 0.275,
    "y": size.square * 0.1,
    "height": size.square * 0.3,
    "width": size.square * 0.1,
    "xinitial": size.square * 0.45,
    "yinitial": size.square * 0.1,
		"heightinitial": size.square * 0.4,
		"widthinitial": size.square * 0.1,
		"fill":"black"
}, {//left to middle across
    "x": size.square * 0.1,
    "y": size.square * 0.1,
    "height": size.square * 0.1,
    "width": size.square * 0.4,
    "xinitial": size.square * 0.7,
    "yinitial": size.square * 0.1,
		"heightinitial": size.square * 0.1,
		"widthinitial": size.square * 0.2,
		"fill":"black"
}, ];


//draw the svg black lines


svgSelection.selectAll("rect")
    .data(jsonStrokes)
    .enter()
    .append("rect")
    .attr("x", function(d,i) {
        if (i>0) {return d.xinitial;}
    })
    .attr("y", function(d) {
        return d.yinitial;
    })
    .attr("height", function(d) {
        return d.heightinitial;
    })
    .attr("width", function(d) {
        return d.widthinitial;
    })
		.style("fill", function(d) {return d.fill;});

svgSelection.selectAll("rect").transition()
							.delay(750)
							.duration(1000)
							.attr("x", function(d) {return d.x;})
							.attr("y", function(d) {return d.y;})
							.attr("width", function(d) {return d.width;})
							.attr("height", function(d) {return d.height;});







/*
// allow saving as svg/png

d3.select("#save").on("click", function(){
  var html = d3.select("svg")
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

  //console.log(html);
  var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
  var img = '<img src="'+imgsrc+'">';
  d3.select("#svgdataurl").html(img);


  var canvas = document.querySelector("canvas"),
	  context = canvas.getContext("2d");

  var image = new Image;
  image.src = imgsrc;
  image.onload = function() {
	  context.drawImage(image, 0, 0);

	  var canvasdata = canvas.toDataURL("image/png");

	  var pngimg = '<img src="'+canvasdata+'">';
  	  d3.select("#pngdataurl").html(pngimg);

	  var a = document.createElement("a");
	  a.download = "sample.png";
	  a.href = canvasdata;
	  a.click();
  };

});

*/
