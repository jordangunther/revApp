app.controller('createProductCtrl', function($scope, createProductService){
	$scope.addProduct = function(){
		createProductService.addProduct($scope.product, $scope.amount).then(function(res){
			$scope.products = res;
		});
	}
})