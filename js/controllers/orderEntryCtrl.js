<<<<<<< HEAD
app.controller('orderEntryCtrl', function($scope, orderEntryService){
	$scope.productsPlaceholder = 'Products';
	$scope.buyProduct = function(){
		$scope.buyProduct = $scope.selectedProduct
	}
	$scope.getPart = function() {
		orderEntryService.getParts().then(function(res){
			$scope.parts = res;
		});

	}
	$scope.addPart = function(){
		orderEntryService.addPart($scope.product, $scope.amount).then(function(res){
			$scope.parts = res;
		});
	}
=======
app.controller('orderEntryCtrl', function ($scope, orderEntryService){
	$scope.parts = [];
	$scope.partObj = {
		name: '',
		amount: ''
	};
	$scope.createPart = function(){
		orderEntryService.addPart($scope.part, $scope.amount);
		console.log('ctrl', $scope.part);
	};
>>>>>>> 42a24ea72782f041eda8bf5fcb6c9340386dcf03
});