app.config( function ($routeProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'paginas/home.html'
		})
		.when('/Tienda', {
			templateUrl: 'paginas/tienda.html'
		})
		.when('/Contacto', {
			templateUrl: 'paginas/contacto.html'
		})
		.when('/', {
			templateUrl: 'paginas/home.html'
		})
		.otherwise({ redirectTo: '/' })
});