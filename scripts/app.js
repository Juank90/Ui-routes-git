angular.module('rutasApp', [
	'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('main', {
			url: '/main',
			template: '<h2>Hola  al principal</h2><p>Este es un parrafo sencillo</p>'
		})
		.state('usuarios', {
			url: '/users',
			template: '<h2>Modificación de usuarios</h2><a ui-sref="usuarios.listado">Ir al usuarios</a><div ui-view>Aqui el listado</div> <button  class="btn btn-navbar btn-primary"ui-sref="usuarios.preguntas">primera pregunta</button>'
		})
		.state('usuarios.preguntas', {
			url: '/users',
			template: ' <h1> RESPONDE:</h1><h2> prengunta: cual es la masa del sol</div>'
		})
		.state('usuarios.', {
			url: '/users',
			template: ' <h1> RESPONDE:</h1><h2> prengunta: cual es la masa del sol</div>'
		});
}])