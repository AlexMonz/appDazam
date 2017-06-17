var app = angular.module('login.loginService', []);

app.factory('LoginService', ['$http', '$q', function( $http , $q ){
	
	var self = {

		login: function(datos){

			var d = $q.defer();

				$http.post('php/servicios/post.verificar.php', datos)

				.then(function(response) {

				var data = response.data;

    			console.log( data );
				d.resolve(data)

				}); 


			return d.promise;
		}


	};

	return self;

	
}])


