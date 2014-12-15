var barData = [];

for (var i = 100; i >= 0; i--) {
	barData.push(Math.random() * 100);
}
console.profile('perfCheck');
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

d3.select("#chart").append('svg')
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
			height: function (data) {
				return yScale(data);
			},
			x: function (data, index) {
				return xScale(index);
			},
			y: function (data) {
				return height - yScale(data);
			}
		})
	.on('mouseover', function(data) {
		d3.select(this)
			.style('opacity', '0.5');
		console.log(parseInt(data));
	})
	.on('mouseleave', function(data) {
		d3.select(this)
			.style('opacity', '1');
		d3.select("#dataValue").html(data);
	});
console.profileEnd('perfCheck');