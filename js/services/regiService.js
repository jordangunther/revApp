angular.module('recApp')
.service('regiService', function($firebaseAuth){
  
	var ref = new Firebase('https://myallapp.firebaseio.com/recApp');
	var authObj = $firebaseAuth(ref);
	console.log("this is authObj:", authObj);

	this.register = function(user, callback){
    console.log('ran register in rgiService');
    	authObj.$createUser({
      		email: user.email,
      		password: user.password
    	}).then(function(userObj){
        	console.log("User created successfully");
        	return authObj.$authWithPassword({
          		email : user.email,
          		password : user.password
        	});
    	}).then(function(authData){
      		if (authData){
        		authData.name = user.name;
        		authData.timestamp = new Date().toISOString();
        		ref.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
        		callback(authData);
      		} else {
        		console.log('Error');
      		}
    	}).catch(function(error){
        	switch (error.code) {
          		case "EMAIL_TAKEN":
            	alert("email already in use");
            	break;
          		case "INVALID_EMAIL":
            	alert("invalid email.");
            	break;
          		default:
            	alert("Please fix required fields in error");
        	}
    	});
  	};
});