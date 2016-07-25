var app = angular.module("madLibsApp");

app.controller("outputCtrl", function($scope, madLibsFactory){
    $scope.madLibsObject = madLibsFactory.returnObject();
    console.log($scope.madLibsObject);
    //creating object on the scope - the value of that is equal to the function we created in our service//
    //returnObject's whole point is to return the empty object we created in our service



});
