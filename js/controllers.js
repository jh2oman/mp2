var movieControllers = angular.module('movieControllers', ['ngRoute', 'ngAnimate']);

movieControllers.controller('ListController', ['$scope', '$http' , function($scope, $http){

	$http.get("./data/imdb250.json").success(function(data){
		 $scope.movies = data;
		 $scope.movieOrder = 'rank';
	});
}]);

movieControllers.controller('DetailsController', ['$scope', '$http', '$routeParams' , function($scope, $http, $routeParams){

	$http.get("./data/imdb250.json").success(function(data){
		 $scope.movies = data;
		 $scope.whichItem = $routeParams.imdbID;
		 if ($routeParams.imdbID > 0)
		 {
		 	$scope.prevItem= Number($routeParams.imdbID)-1 ;
		 }
		 else
		 {
		 	$scope.prevItem= $scope.movies.length -1 ;
		 }

		 if ($routeParams.imdbID < $scope.movies.length -1)
		 {
		 	$scope.nextItem= Number($routeParams.imdbID)+1 ;
		 }
		 else
		 {
		 	$scope.nextItem= 0 ;
		 }
	});
}]);

movieControllers.controller('GalleryController', ['$scope', '$http' , function($scope, $http){

	$http.get("./data/imdb250.json").success(function(data){
		 $scope.movies = data;
		 $scope.movieOrder = 'rank';
	});
}]);
movieControllers.controller('PickerController', ['$scope', '$http' , function($scope, $http){

	$http.get("./data/imdb250.json").success(function(data){
		 $scope.movies = data;

	});
}]);