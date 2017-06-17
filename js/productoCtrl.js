app.controller('productoCtrl', ['$scope', '$http' ,'$routeParams', function($scope,$http,$routeParams){
  
	var id = $routeParams.id;

	$scope.actualizado = false;
	$scope.eliminado = false;
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

			if (response.status == 200) {

					$scope.actualizado = true;
					setTimeout(function(){
						$scope.actualizado = false;
						$scope.$apply(); // es necesario al hacer cambios a destiempo en angular
					},2500);

			};
			



		});	

	};



	$scope.eliminar = function(){

		console.log("vamos a eliminar");

				$http.post('php/servicios/productos.delete.php' , $scope.producto)

				.then(function(response){

				console.log(response);


			if (response.status == 200) {

					$scope.eliminado= true;
					setTimeout(function(){
						$scope.eliminado = false;
						$scope.$apply(); // es necesario al hacer cambios a destiempo en angular
					},2500);

			};

			

		});


	}

 
}]);