app.service('loginService', function($firebaseAuth){
	var ref = new Firebase('https://myallapp.firebaseio.com/recApp');
	var authObj = $firebaseAuth(ref);
	console.log("this is authObj:", authObj);

	this.login = function(user, callback){
		console.log('ran login in the login service');
    	authObj.$authWithPassword({
      		email : user.email,
      		password : user.password
    	}).then(function(authData){
        console.log('ran first then');
      		// user authenticated with Firebase
      		console.log("Logged In! User ID: " + authData.uid);
      		callback(authData);
    	}).catch(function(error){
        alert('unrecognized email or password')
    	});
  	};
});