

var topSpotsApp= angular.module('topSpotsApp', []);

topSpotsApp.controller('spotsCtrl', function ($scope, $http){

	$http.get('topSpots.json').success(function(data){
		$scope.topSpots= data;

		});


	});



