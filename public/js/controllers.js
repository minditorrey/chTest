'use strict';

var app = angular.module('finalApp');

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

    $scope.saveBeer = (thisBeer) => {
   // console.log(thisAuctionEdit)
        BeerSvc.update(thisBeer) 	
        .then(res => {
            $scope.beers.forEach((beer, i) => {
                if(beer._id === res.data._id) {
                $scope.beer[i] = res.data;
                }
            })

       $scope.beers.push($scope.thisBeer);
       

        

});

app.controller('profilesController', function($scope, $state, $rootScope) {
    console.log('profileCtrl!');
    console.log('user:', $scope.user);

    var username = $rootScope.user.username;
    console.log('username', username);
    $scope.user = $rootScope.user;
    $scope.profilePic = $rootScope.user.customData.profilePic;

  });

