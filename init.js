app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider){

	urlRouterProvider.otherwise('/state1');

	// stateProvider
	// 	.state("directive", {
	// 		url: "/directive",
	// 		template: "<h1>HELLO!</h1>"
	// 	})
	// 	.state("app.other", {
	// 		url: "/other",
	// 		template: "<h1>HELLO!</h1>"
	// 	});
	

	stateProvider
		.state('app', {
			url: '/app',
			template: '<h1>app</h1><ui-view></ui-view>'
		})
		.state('state1', {
			url: "/state1",
			template: "<h1>HELLO!</h1>"
		})
		.state('app.state2', {
			url: "/state2",
			template: "<h1>HELLO2!</h1>"
		})
		.state('question', {
			url: '/question',
			templateUrl: 'views/question/base.html'
		})
		.state('question.watch', {
			url: '/question/watch',
			templateUrl: 'views/question/watch/index.html',
			controller: 'question.watch'
		})
		;



}]);

require('./views/question/watch/index');
