angular.module('recApp')
.directive('barGraph', function ($parse, d3Factory) {
	var barGraphOfAwesomeness = {
		restrict: 'E',
		replace: false,
		scope: {data: '='},
		templateUrl: 'js/directives/barGraph/barGraphTmpl.html',
		link: function(scope, element, attrs) {
			d3Service.d3().then(function(d3) {
				var chart = d3.select(element[0]);
				chart.append("div").attr("class", "chart")
	            .selectAll('div')
	            .data(scope.data).enter().append("div")
	            .transition().ease("elastic")
	            .style("width", function(d) { return d + "%"; })
	            .text(function(d) { return d + "%"; });
			})
		}
	};
	return barGraphOfAwesomeness;
});