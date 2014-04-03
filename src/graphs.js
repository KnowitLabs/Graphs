var graphs = {
	init: function () {
		// Only init if a graph is detected. 
		if ($('.canvasjs').length > 0) {

			// Loop through all the graphs and render them
			$('.canvasjs').each(function (i) {
				if ($(this).data('graphtype') === 'IncompleteDonut') {
					graphs.drawIncompleteDonut($(this).attr('id'), $(this).data('value'), $(this).data('color'))
				} else {
					graphs.draw($(this).attr('id'), $(this).data('graphtype'), $(this).data('stats'))
				}
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
	},

	// Only used to draw an incomplete donut, so only pass ONE value to this
	drawIncompleteDonut: function (graphid, value, color) {
		var chart = new CanvasJS.Chart(graphid, {
			toolTip: {
				enabled: false,
			},
			data: [{
				type: "doughnut",
				startAngle: 90,
				dataPoints: [{
					y: value,
					indexLabel: null,
					color: color
				}, {
					y: (100 - value),
					indexLabel: null,
					color: 'transparent'
				}]
			}]
		});

		chart.render();
		$('#' + graphid + '-total').html(value + '%');
	}

}