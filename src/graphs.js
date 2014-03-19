var graphs = {
	init: function () {
		// Only init if a graph is detected. 
		if ($('.canvasjs').length > 0) {

			// Loop through all the graphs and render them
			$('.canvasjs').each(function (i) {
				graphs.draw($(this).attr('id'), $(this).data('graphtype'), $(this).data('stats'))
			});
		}
	},

	draw: function (graphid, graphtype, indataurl) {
		$ajaxCall = $.ajax({
			url: indataurl,
			dataType: 'json'
		});
		$ajaxCall.done(function (response) {
			var chart = new CanvasJS.Chart(graphid, {
				title: {
					verticalAlign: 'top',
					horizontalAlign: 'left'
				},
				data: [{
					type: graphtype,
					startAngle: 20,
					dataPoints: response
				}]
			});

			chart.render();
		});

		$ajaxCall.fail(function () {
			$('#graphid').html('Unable to draw graph. Msg: ' + $ajaxCall.responseText);
		});

	}
}