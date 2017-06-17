app.controller('productoCtrl', ['$scope', '$http' ,'$routeParams', function($scope,$http,$routeParams){
  
	var id = $routeParams.id;

	$scope.actualizado = false;
	$scope.producto = {};
	$scope.creando = false;


	if (id == "new"){

		$scope.creando = true;
		


	}else{

	$http.get('php/servicios/productos.getProducto.php?c=' + id)

	.then(function(response) {

		var data = response.data;

		if(data.err !== undefined ){
			window.location = "#/productos";
			return;
		}
    
		$scope.producto = data;

	}); 

	}

	

 

	$scope.guardar = function(){


		if( $scope.creando){

			$http.post('php/servicios/productos.crear.php' , $scope.producto)

				.then(function(response){

				console.log(response);

			if (response.statusText === 'OK') {

					$scope.actualizado = true;
					setTimeout(function(){
						$scope.actualizado = false;
						$scope.$apply(); // es necesario al hacer cambios a destiempo en angular
					},);

			};
			

		});	


		}


		$http.post('php/servicios/productos.guardar.php' , $scope.producto)

		.then(function(response){

			console.log(response);

			if (response.statusText === 'OK') {

					$scope.actualizado = true;
					setTimeout(function(){
						$scope.actualizado = false;
						$scope.$apply(); // es necesario al hacer cambios a destiempo en angular
					},);

			};
			



		});	

	};
 
}]);