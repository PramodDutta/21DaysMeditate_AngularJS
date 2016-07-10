var MainApp = angular.module('MainApp',['ngRoute']);

MainApp.config(['$routeProvider',function ($routeProvider) {

    $routeProvider
        .when('/main', { templateUrl : './partials/Main.html', controller:"MainController" })

        .when('/med',{ templateUrl : './partials/Med.html', controller: "MedController"})

        .when('/med2',{ templateUrl : './partials/About.html', controller: "AboutController"})

        .when('/con',{ templateUrl : './partials/Contact.html', controller: "ContactController"})

        .otherwise({  redirectTo: '/main'});



}]);



MainApp.controller('MainController',function () {
    console.log("In the Main Controller")

});

MainApp.controller('AboutController',function ($scope) {
    console.log("In the About Controller")

     $scope.todoList = [];

     $scope.todoListAdd = function (todo) {

         $scope.todoList.push(todo);
         $scope.todo = "";

     }









});

MainApp.controller('ContactController',function () {
    console.log("In the Contact Controller")

});

MainApp.controller('MedController',function () {
    console.log("In the MedController Controller")

});




