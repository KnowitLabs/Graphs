Graphs Component 0.9.4
======

This is a CanvasJS Implementation made to simplify the use of CanvasJS in web projects.

###How it works
The script search the soruce for divs with the CSS class "canvasjs" and reads their respective data attributes.

####General settings
```
<input type="hidden" class="canvasjs-settings" data-colorsetname="default" data-fontsize="20" data-fontfamily="Arial" data-colorset="#003d59,#ecc500,#d3693b,#a6bbc5,#4c778a,#26a489,#dc825a,#118baf,#419dbe,#62b29d,#333332" />
```
* class: Must be set to "canvasjs-settings" in order to the script to identify the element.
* data-fontsize: Font size, integer value
* data-fontfamily: Font family, string value
* data-colorset: A list of colors in hex format
* data-colorsetname: Name of the color set

####Graph specific settings
```
<div class="canvasjs" id="graph3" data-graphtype="column" data-stats="json/dummy-graphdata.json" data-title="Title of graph"></div>
```

* id: This must be unique and is used to separate the graps
* data-graphtype: specify the type of graph you wish to use. Please see the [documentation](http://canvasjs.com/html5-javascript-column-chart/)
* data-stats: The JSON data to populate the graph.
* data-title: The name/title of the graph

####The JSON data
In this first release the JSON data is very simple and not much can be modified.
* X coordinate
* Y coordinate
* color
* Label
``` 
  [{
  	"label": "Playstation",
  	"y": 357,
  	"x": 10,
  	"color": ""
  }, {
  	"label": "Xbox",
  	"y": 400,
  	"x": 20,
  	"color": ""
  }, {
  	"label": "Nintendo",
  	"y": 1358,
  	"x": 30,
  	"color": ""
  }]
```

####Exception "Gaping" Donut Chart
```
<div class="canvasjs" id="graph4" data-graphtype="IncompleteDonut" data-value="42" data-color="#edc600"></div>
<div id="graph4-total" class="IncompleteDonut_value">300</div>
<div id="graph4-label" class="IncompleteDonut_label">Candy</div>
```
* data-value: The Value. Only one value is possible with this special Donut
* data-color: The color of this donut.
* No JSON is required or possible with this special donut chart.

###Notice
Note that CanvasJS is **not** open source. It's under a [different license](http://canvasjs.com/license-canvasjs/)

####Read more about the graph library itself
http://canvasjs.com

###Version History
####0.9
Initial release.
