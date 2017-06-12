var app = angular.module('appDazam',['ngRoute','login.loginService']);

app.controller('mainCtrl', ['$scope','LoginService' ,function($scope , LoginService){
  
  $scope.header = "paginas/header.html";
  $scope.footer = "paginas/footer.html";
  $scope.invalido = false;
  $scope.cargando = false;
  $scope.mensaje = "Usuario/password incorrecto";


  $scope.ingresar = function(datos){

  	if(datos.usuario.length < 4){
  		$scope.invalido = true;
  		$scope.mensaje = 'Ingrese su usuario valido ( min 4 caracteres)'; 
  		return;
  	}else if(datos.contrasena.length < 6){
  		$scope.invalido = true; 
  		$scope.mensaje = "Ingrese una contraseña valida ( min 6 caracteres)";
  		return;
  	}

  	$scope.invalido = false;
  	$scope.cargando = true;

  	LoginService.login (datos).then( function(data){

  		if( data.err){

  			$scope.invalido =true;
  			$scope.cargando = false;
  			$scope.mensaje = data.mensaje;

  		}else{
  			console.log("data.mensaje")
  			// window.location = data.url;

  		}

  	});

  	

  }

 

}])
