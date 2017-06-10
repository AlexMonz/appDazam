app.controller('productoCtrl', ['$scope', '$http' ,'$routeParams', function($scope,$http,$routeParams){
  
	var id = $routeParams.id;

	$scope.producto = {};

	$http.get('php/servicios/productos.getProducto.php?c=' + id)

	.then(function(response) {

		var data = response.data;

		if(data.err !== undefined ){
			window.location = "#/productos";
			return;
		}
    
		$scope.producto = data;

})  
 
}]);