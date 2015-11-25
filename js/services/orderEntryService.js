app.service('orderEntryService', function(){
	var ref = new Firebase('https://myallapp.firebaseio.com/recApp');
	this.addPart = function(part, amount) {
		ref.push({name: part, amount: amount});
		console.log('service', part)
	}
})
