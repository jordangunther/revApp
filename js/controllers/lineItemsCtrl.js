angular.module('recApp')
.controller('lineItemsCtrl', function($scope, uiGridConstants, lineItemsService){

	($scope.getLineItems = function (){
		lineItemsService.getLineItems().then(function(res){
			console.log(res);
			$scope.myData = res;
			$scope.gridOptions = {
				data: $scope.myData,
			}
		})
	})();
});