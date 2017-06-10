app.controller('panelCtrl', ['$scope', '$http', function($scope,$http){
  
 $scope.productos = {};

$http.get('php/servicios/productos.listado.php')

.then(function(response) {

	var data = response.data;
    
	$scope.productos = data;

})  

 
}]);

