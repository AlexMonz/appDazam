app.controller('panelCtrl', ['$scope', '$http', function($scope,$http){
  
 $scope.productos = {};
 $scope.posicion  = 3;

$http.get('php/servicios/productos.listado.php')

.then(function(response) {

	var data = response.data;
    
	$scope.productos = data;

})  



$scope.siguiente = function(){

		if($scope.productos.length > $scope.posicion ){

			$scope.posicion = $scope.posicion + 3;

		}
}

$scope.anterior = function(){

		if($scope.posicion > 3 ){

			$scope.posicion = $scope.posicion - 3;

		}
}

console.log($scope.productos.length); 

}]);


