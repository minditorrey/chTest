'use strict';

var app = angular.module('finalApp');

app.controller('beerController', function($scope, $http, BeerSvc) {

});

app.controller('homeController', function($scope, $http, BeerSvc) {
    console.log('homeCtrl!');

    BeerSvc.getBeer()
    .then(res => {
        $scope.beer = res.data;
        var beer = $scope.beer;
        console.log('beer:', beer);
        console.log('scope.beer', $scope.beer);
    })
    .catch(err => {
        console.log('err:', err);
    });

    BeerSvc.getAll()
    .then(res => {
        $scope.beers = res.data;

        var beers = $scope.beers;
 
    })
    .catch(err => {
        console.log('err:', err);
    });



    $scope.addBeer = function(thisBeer) {

        BeerSvc.create($scope.thisBeer) 	
 		$scope.beers.push($scope.thisBeer);
      	console.log('thisBeer', $scope.thisBeer);
    }
});

app.controller('profilesController', function($scope, $state, $rootScope, BeerSvc) {
    console.log('profileCtrl!');
    console.log('user:', $scope.user);

    var username = $rootScope.user.username;
    console.log('username', username);
    $scope.user = $rootScope.user;
    $scope.profilePic = $rootScope.user.customData.profilePic;


    BeerSvc.getAll()
    .then(res => {
        $scope.beers = res.data;
        var beers = $scope.beers;
 
    })
    .catch(err => {
        console.log('err:', err);
    });

        $scope.removeBeer = function(beer) {
        BeerSvc.delete(beer);
        $scope.beers.splice(0, 1);
    }

});


