var app = angular.module("madLibsApp");

app.controller("inputCtrl", function($scope, madLibsFactory, $location){
  $scope.ourFunction = function (madLib) {
      // console.log(madLib);
//controller has access to anything in factory and anything in $scope
      madLibsFactory.saveObject(madLib);
      //factory name. function//
      //accessing factory's 'saveObject' function - grabbing object and running it through function//
      $location.path("view2");
      };

});
