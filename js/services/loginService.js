angular.module('recApp')
.service('loginService', function($firebaseAuth){
  
	var ref = new Firebase('https://myallapp.firebaseio.com/recApp');
	var authObj = $firebaseAuth(ref);

	this.login = function(user, callback){
    	authObj.$authWithPassword({
      		email : user.email,
      		password : user.password
    	}).then(function(authData){
      		callback(authData);
    	}).catch(function(error){
        alert('unrecognized email or password')
    	});
  	};
});