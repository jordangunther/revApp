app.controller('loginCtrl', function ($scope, $state, loginService){
	var loginCallback = function(user) {
    $state.go('summary', {userId: user.uid} );
  };
  	
  $scope.login = function () {
    return loginService.login($scope.user, loginCallback);
  };
});