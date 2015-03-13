var myApp = angular.module('myApp', [
	'ngRoute',
	'movieControllers',
	'ngAnimate']);
myApp.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: '/partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:imdbID', {
		templateUrl: '/partials/details.html',
		controller: 'DetailsController'
	}).
	when('/gallery', {
		templateUrl: '/partials/gallery.html',
		controller: 'GalleryController'
	}).
	when('/picker', {
		templateUrl: '/partials/picker.html',
		controller: 'PickerController'
	}).
	otherwise({
		redirectTo:'/gallery'
	});
}]);