var app = angular.module('appDazam',['ngRoute']);

app.controller('mainCtrl', ['$scope', function($scope){
  
  $scope.header = "paginas/header.html";
  $scope.footer = "paginas/footer.html";

 

}])

 .factory('LoginService', ['$http' , '$q' function ($http , $q) {
    
     var self = {

        login: function(datos){

          var d = $q.defer();

          return d.promise;

        }

     }; 

      return self;

  }])