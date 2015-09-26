var app = angular.module("randomWords", []);

app.controller ("myController", function($scope){
		$scope.wordsAtRandom = ["blue", "red", "orange", "green", "yellow", "boy", "girl", "one", "two", "three", "four", "five", "bat", "doll", "Frisbee", "ball", "house", "grass", "table", "chair", "lamp", "couch", "pencil", "eraser", "computer", "pizza", "candy", "ice cream", "cookies", "cheeseburger", "tacos"]
		$scope.newWords = [];
		$scope.phrasesAtRandom = ["How are you?", "I love you!", "Go to your room.", "Do your homework.", "Don't put that in your mouth!", "Your shoes are on the wrong feet.", "Coding is fun!", "I have lost my mind.", "What are you doing?"]
		$scope.newPhrases = [];
	$scope.clickRandomWord = function(){
		$scope.generateWord = $scope.wordsAtRandom[Math.floor(Math.random() * $scope.wordsAtRandom.length)];
		$scope.newWords.push($scope.generateWord);
	};
	$scope.clickRandomPhrase = function(){
		$scope.generatePhrase = $scope.phrasesAtRandom[Math.floor(Math.random() * $scope.phrasesAtRandom.length)];
		$scope.newPhrases.push($scope.generatePhrase);
	};

});


