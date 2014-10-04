var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($httpProvider, $routeProvider){

$httpProvider.interceptors.push('httpRequestInterceptor');

$routeProvider.when('/login', {
	templateURL: 'app/js/login/loginTempl.html',
	controller: 'loginCtrl'
}).when('/threads', {
	templateURL: 'app/js/threads/threadsTempl.html',
	controller: 'threadsCtrl'
}).when('/threads/:threadId', {
	templateURL: 'app/js/threads/threadsTempl.html',
	controller: 'threadsCtrl'
}).otherwise({
	redirectTo: '/login'
})

})