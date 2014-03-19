Graphs Component
======

This is a CanvasJS Implementation made to simplify the use of CanvasJS in web projects.

###How it works
The script search the soruce for divs with the CSS class "canvasjs" and reads their respective data attributes.

```
<div class="canvasjs" id="graph3" data-graphtype="column" data-stats="json/dummy-graphdata.json"></div>
```

* id: This must be unique and is used to separate the graps
* data-graphtype: specify the type of graph you wish to use. Please see the [documentation](http://canvasjs.com/html5-javascript-column-chart/)
* data-stats: The JSON data to populate the graph.

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

###Notice
Note that CanvasJS is **not** open source. It's under a [different license](http://canvasjs.com/license-canvasjs/)

####Read more about the graph library itself
http://canvasjs.com

###Version History
####0.9
Initial release.
