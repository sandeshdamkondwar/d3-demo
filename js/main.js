var barData = [20, 30, 50, 10, 20, 30, 40, 90, 300];

var height =400,
	width = 600,
	barWidth = 50,
	barOffset = 10;

d3.select("#chart").append('svg')
	.attr({
		width: width,
		height: height
	})
	.style({background: '#c9d7d6'})
	.selectAll('rect').data(barData)
	.enter().append('rect')
		.style({fill: "#C61C6f"})
		.attr({
			width: barWidth,
			height: function (data) {
				return data;
			},
			x: function (data, index) {
				return barWidth * index + (barOffset * index + 10);
			},
			y: function (data) {
				return (height- 10) - data;
			}
		});