angular.module('recApp')
.controller('orderEntryCtrl', function($scope, orderEntryService){

	$scope.createOrder = function(){
		orderEntryService.createOrder($scope.customer).then(function(res){
			$scope.confirmation = res;
			console.log(res);
		})
	}
	
});