(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./views/question/watch/index":2}],2:[function(require,module,exports){
app.controller('question.watch', ['$scope', function(scope) {

	scope.source = [{
		a: 1,
		b: 2
	}];

	scope.$watch('source', function() {
		console.log('--------$watch');
		console.log(arguments);
	});

	scope.$watch('source', function(newS, oldS) {
		console.log('--------$watch deep');
		console.log(newS === oldS);
		console.log(newS === scope.source);
		console.log(arguments);
	}, true);

	scope.$watchCollection('source', function(newC, oldC) {
		console.log('--------$watchCollection');
		console.log(newC === oldC);
		console.log(newC === scope.source);
		console.log(arguments);
	});


	scope.addItem = function() {
		scope.source.push({
			c: 3
		});
	};

	scope.modifyOneItem = function() {
		scope.source[0].a = 111;
	};

	scope.modifyQuote = function() {
		scope.source = [{
			a: 1,
			b: 2
		}];
	};
}]);
},{}]},{},[1])