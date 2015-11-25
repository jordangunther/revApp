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
});