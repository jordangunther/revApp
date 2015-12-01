<<<<<<< HEAD
app.service('orderEntryService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/parts');
	var defer = $q.defer();
	this.getParts = function(){
		ref.on('value', function(res){
			var parts = res.val();
			defer.resolve(parts);
		});
		return defer.promise;
	};
	this.addPart = function(part, amount){
		ref.push({
			name: part, 
			amount: amount
		});
		ref.on('value', function(res){
			var parts = res.val();
			defer.resolve(parts);
		});
		return defer.promise;
	};
});
=======
app.service('orderEntryService', function(){
	var ref = new Firebase('https://myallapp.firebaseio.com/recApp');
	this.addPart = function(part, amount) {
		ref.push({name: part, amount: amount});
		console.log('service', part)
	}
})
>>>>>>> 42a24ea72782f041eda8bf5fcb6c9340386dcf03
