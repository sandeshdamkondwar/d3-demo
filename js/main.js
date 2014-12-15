var barData = [10, 20, 30, 40, 10, 20, 30, 40, 50,10, 20, 30, 40, 10, 20, 30, 40, 50,10, 20, 30, 40, 10, 20, 30, 40, 50];

var height =400,
	width = 600;

var yScale = d3.scale.linear()
			   .domain([0, d3.max(barData)])
			   .range([0, height]);

var xScale = d3.scale.ordinal()
	.domain(d3.range(barData.length))
	.rangeBands([0, width]);

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
			width: xScale.rangeBand(),
			height: function (data) {
				return yScale(data);
			},
			x: function (data, index) {
				return xScale(index);
			},
			y: function (data) {
				return height - yScale(data);
			}
		});