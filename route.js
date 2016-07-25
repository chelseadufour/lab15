var app = angular.module("madLibsApp", ["ngRoute"]);

//CREATING A ROUTE//
app.config(function($routeProvider){
  //use route provider object with when method
  $routeProvider.when("/view1", {
    controller: "inputCtrl",
    templateUrl: "partials/view1.html"
  }).when("/view2", {
    controller: "outputCtrl",
    templateUrl: "partials/view2.html"
  })
});
