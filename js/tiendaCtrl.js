var data  = [
  {
    "_id": "592ee95eeff218c875bc2b63",
    "index": 0,
    "name": "Wagner Berger",
    "picture": "http://placehold.it/32x32",
    "age": 34
  },
  {
    "_id": "592ee95e3d70ab19947c568d",
    "index": 1,
    "name": "Oneal Barber",
    "picture": "http://placehold.it/32x32",
    "age": 26
  },
  {
    "_id": "592ee95e200e64342dd67a68",
    "index": 2,
    "name": "Pearson Horne",
    "picture": "http://placehold.it/32x32",
    "age": 26
  },
  {
    "_id": "592ee95ec5c6fab89e7a1560",
    "index": 3,
    "name": "Rochelle Garrison",
    "picture": "http://placehold.it/32x32",
    "age": 40
  },
  {
    "_id": "592ee95e2ac64db1c7defa0b",
    "index": 4,
    "name": "Wolf Joyner",
    "picture": "http://placehold.it/32x32",
    "age": 36
  }
]



app.controller('tiendaCtrl', ['$scope', function($scope){
  
   $scope.productos = data;
 
 
}])