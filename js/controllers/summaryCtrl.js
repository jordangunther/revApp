angular.module('recApp')
.controller('summaryCtrl', function($scope, summaryService){
	
   ($scope.getLineItems = function() {
        summaryService.getLineItems().then(function(res){
            $scope.lineItems = res;
        });
    })();


    $scope.myGraphData = [10,20,30,40,60];



    $scope.myData = [
       {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
	];
});