angular.module('recApp')
.service('lineItemsService', function($q){
	var ref = new Firebase('https://myallapp.firebaseio.com/revApp/lineItems');


	this.getLineItems = function() {
		var defer = $q.defer();
		ref.on('value', function(res){
			var lineItemObjs = res.val();
			var lineItems = [];
			for (key in lineItemObjs) {
				lineItems.push(lineItemObjs[key]);
			}
			defer.resolve(lineItems);
		});
		return defer.promise;
	}
});