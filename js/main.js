var barData = [];

for (var i = 50; i >= 0; i--) {
	barData.push(Math.random() * 100);
}

var height =400,
	width = 600;

var yScale = d3.scale.linear()
			   .domain([0, d3.max(barData)])
			   .range([0, height]);

var xScale = d3.scale.ordinal()
	.domain(d3.range(barData.length))
	.rangeBands([0, width]);

var colors = d3.scale.linear()
			   .domain([0, barData.length * 0.33, barData.length * 0.66, barData.length])
			   .range(["#b58929", "#c61c6f", "#268bd2", "#85992c"]);

var chart = d3.select("#chart").append('svg')
	.attr({
		width: width,
		height: height
	})
	.style({background: '#c9d7d6'})
	.selectAll('rect').data(barData)
	.enter().append('rect')
		.style({fill: function (data, index) {
			return colors(index);
		}})
		.attr({
			width: xScale.rangeBand(),
			x: function (data, index) {
				return xScale(index);
			},
			height: 0,
			y: height
		})
	.on('mouseover', function(data) {
		d3.select(this)
			.transition()
			.style('opacity', '0.8');
		d3.select("#dataValue").html(data);
	})
	.on('mouseleave', function(data) {
		d3.select(this)
		.transition().delay(500).duration(1000)
			.style('opacity', '1');
	});

chart.transition()
	.attr('height', function (data) {
		return yScale(data);
	})
	.attr('y', function (data) {
		return height - yScale(data);
	})
	.delay(function (d, i) {
		return i * 10;
	})
	.duration(800)
	.ease('elastic');