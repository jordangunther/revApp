app.controller('regiCtrl', function ($scope, $state, regiService){
	
	var loginCallback = function(user){//Can I put this in the main ctrl?
    	console.log('loginCallback was run')
    	$state.go('summary', {userId: user.uid} )
  	};

	$scope.register = function () {
		console.log('register was run in regiCtrl')
    	return regiService.register($scope.user, loginCallback);
  	};
});