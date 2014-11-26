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