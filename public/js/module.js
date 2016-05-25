var app = angular.module('finalApp', ['ui.router', 'stormpath', 'stormpath.templates']);

app.run(function($stormpath){
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'home'
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/html/home.html',
			controller: 'homeController'
		})
    	.state('login', { 
    		url: '/login', 
    		templateUrl: '/html/login.html' 
    	})
    	.state('register', { 
    		url: '/register', 
    		templateUrl: '/html/register.html' 
    	})
    	.state('beer', {
			url: '/beer',
			templateUrl: '/html/beer.html',
			controller: 'beerController',
			sp: {
				authenticate: true
			}
		})
		.state('profiles', {
			url: '/profiles',
			templateUrl: '/html/profiles.html',
			controller: 'profilesController',
			sp: {
				authenticate: true
			}
		})		
		.state('details', {
			url: '/details/:id',
			templateUrl: '/html/details.html',
			controller: 'detailsController',
			sp: {
				authenticate: true
			}
		})

	$urlRouterProvider.otherwise('/');

});