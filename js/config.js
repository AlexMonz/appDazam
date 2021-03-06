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
			templateUrl: 'paginas/calderas.html',
		})
		.when('/Calefaccion', {
			templateUrl: 'paginas/calefaccion.html'
		})
		.when('/Instalaciones', {
			templateUrl: 'paginas/instalaciones.html'
		})
		.when('/productos', {
			templateUrl: 'paginas/productos.html',
			controller: 'productosCtrl'
		})
		.when('/producto/:id', {
			templateUrl: 'paginas/producto.html',
			controller: 'productoCtrl'
			
		})
		.when('/admin', {
			templateUrl: 'paginas/index.html',
			
			
		})
		.otherwise({ redirectTo: '/' })
});