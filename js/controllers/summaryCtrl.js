angular.module('recApp')

.controller('summaryCtrl', function($scope, summaryService){
	$scope.janTotal = 0;
    $scope.febTotal = 0;
    $scope.marTotal = 0;
    $scope.aprTotal = 0;
    $scope.mayTotal = 0;
    $scope.junTotal = 0;
    $scope.julTotal = 0;
    $scope.augTotal = 0;
    $scope.sepTotal = 0;
    $scope.octTotal = 0;
    $scope.novTotal = 0;
    $scope.decTotal = 0;

    $scope.lastJanTotal = 0;
    $scope.lastFebTotal = 0;
    $scope.lastMarTotal = 0;
    $scope.lastAprTotal = 0;
    $scope.lastMayTotal = 0;
    $scope.lastJunTotal = 0;
    $scope.lastJulTotal = 0;
    $scope.lastAugTotal = 0;
    $scope.lastSepTotal = 0;
    $scope.lastOctTotal = 0;
    $scope.lastNovTotal = 0;
    $scope.lastDecTotal = 0;

   ($scope.getLineItems = function() {
        summaryService.getLineItems().then(function(res){
            $scope.lineItems = res;
            $scope.totalMonthAmount();
            console.log($scope.lineItems);
        });
    })();
    $scope.totalMonthAmount = function() {
        var todaysDate = new Date();
        var currentYear = todaysDate.getFullYear();
        for (var i = 0; i < $scope.lineItems.length; i++){
            var date = new Date($scope.lineItems[i].orderEntryDate);
            var year = date.getFullYear();
            var month = date.getMonth();
            console.log(year);
            console.log(month);
            console.log(currentYear);
            if (year === currentYear){
                console.log('yay current year')
               if (month === 0) {
                    $scope.janTotal = $scope.janTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.febTotal = $scope.febTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.marTotal = $scope.marTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.aprTotal = $scope.aprTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.mayTotal = $scope.mayTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.junTotal = $scope.junTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.julTotal = $scope.julTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.augTotal = $scope.augTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.sepTotal = $scope.sepTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.octTotal = $scope.octTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.novTotal = $scope.novTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    console.log('yay month 11')
                    $scope.decTotal = $scope.decTotal + $scope.lineItems[i].extendedAmount;
                }

            } else if(year === currentYear - 1){
                if (month === 0) {
                    $scope.lastJanTotal = $scope.lastJanTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 1) {
                    $scope.lastFebTotal = $scope.lastFebTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 2) {
                    $scope.lastMarTotal = $scope.lastMarTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 3) {
                    $scope.lastAprTotal = $scope.lastAprTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 4) {
                    $scope.lastMayTotal = $scope.lastMayTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 5) {
                    $scope.lastJunTotal = $scope.lastJunTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 6) {
                    $scope.lastJulTotal = $scope.lastJulTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 7) {
                    $scope.lastAugTotal = $scope.lastAugTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 8) {
                    $scope.lastSepTotal = $scope.lastSepTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 9) {
                    $scope.lastOctTotal = $scope.lastOctTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 10) {
                    $scope.lastNovTotal = $scope.lastNovTotal + $scope.lineItems[i].extendedAmount;
                } else if (month === 11) {
                    $scope.lastDecTotal = $scope.lastDecTotal + $scope.lineItems[i].extendedAmount;
                }
            }
            
        }
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['Current Fiscal Month', $scope.janTotal, $scope.febTotal, $scope.marTotal, $scope.aprTotal, $scope.mayTotal, $scope.junTotal, $scope.julTotal, $scope.augTotal, $scope.sepTotal, $scope.octTotal, $scope.novTotal, $scope.decTotal],
                    ['Previous Year', $scope.lastJanTotal, $scope.lastFebTotal, $scope.lastMarTotal, $scope.lastAprTotal, $scope.lastMayTotal, $scope.lastJunTotal, $scope.lastJulTotal, $scope.lastAugTotal, $scope.lastSepTotal, $scope.lastOctTotal, $scope.lastNovTotal, $scope.lastDecTotal],
                ]      
            },
            axis: {
                y: {
                    label: {
                        text: 'Amount',
                        position: 'outer-middle'
                    },
                    tick: {
                        format: d3.format("$,") // ADD
                    }
                },
                x: {
                    type: 'category',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }    
            }
        })    
    }
});