app.controller('loginCtrl', function ($scope, $state, loginService){
console.log($state.go);
      // $scope.user = firebaseService.getUser($stateParams.userId)
	var loginCallback = function(user){//Can I put this in the main ctrl?
    	console.log('loginCallback was run');
    	$state.go('summary', {userId: user.uid} );
  	};
  	
  	$scope.login = function () {
  		console.log('login in loginCtrl ran')
    return loginService.login($scope.user, loginCallback);
  };
});