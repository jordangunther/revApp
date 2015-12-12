angular.module('recApp')
.controller('myCtrl', function($scope){
	$scope.invoiced = 'invoiced';
	$scope.shipped = 'shipped';
	$scope.shippedNotInvoiced = 'shipped not invoiced';
});