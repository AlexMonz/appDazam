var app = angular.module('appDazam',['ngRoute']);

app.controller('mainCtrl', ['$scope', function($scope){
  
  $scope.header = "paginas/header.html";
  $scope.footer = "paginas/footer.html";

 

}])