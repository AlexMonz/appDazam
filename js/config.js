app.config( function ($routeProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'paginas/home.html'
		})
		.when('/Tienda', {
			templateUrl: 'paginas/tienda.html',
			controller: 'tiendaCtrl'
		})
		.when('/Contacto', {
			templateUrl: 'paginas/contacto.html'
		})
		.when('/Calderas', {
			templateUrl: 'paginas/calderas.html'
		})
		.when('/Calefaccion', {
			templateUrl: 'paginas/calefaccion.html'
		})
		.when('/Instalaciones', {
			templateUrl: 'paginas/instalaciones.html'
		})
		.when('/Login', {
			templateUrl: 'paginas/login.html'
		})
		.otherwise({ redirectTo: '/' })
});