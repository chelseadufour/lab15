var app = angular.module("madLibsApp");

app.factory("madLibsFactory", function (){
//create a variable that will be an empty object//
var emptyObject = {
};
//function one will take something and save it//
//function two will take the thing and return it//
function saveObject(madLib){
  //set emptyObject to equal madLib the name of the object//
  emptyObject = madLib;
  console.log(emptyObject);
  //whenever saveobject runs, anything that passes through function is going -->
  //to be stored inside of empty object//
};
function returnObject(){
  return emptyObject;
  //returning the emptyobject//
};
  return {
    saveObject: saveObject,
    returnObject: returnObject
  }
//when factory runs we have an empty object
//the third factories MUST return objects
//services MUST return fuctions
//saveobject is a property with a value of saveobject which is a function

});
