angular.module('recApp')
.service('firebaseService', function($firebase, $firebaseObject, $firebaseArray) {
	
	var ref = new Firebase('https://myallapp.firebaseio.com/recApp');
  	
  	this.getUser = function(userId){
      console.log(userId);
    	   return $firebaseObject(new Firebase(firebaseUrl + 'users/' + userId));
  	};
});