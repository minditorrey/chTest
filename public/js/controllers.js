'use strict';

var app = angular.module('finalApp');

app.controller('homeController', function($scope, $http, BeerSvc) {
    console.log('homeCtrl!');

    BeerSvc.getAll()
        .then(res => {
        $scope.items = res.data;
        var items = $scope.items;
        console.log(items);
    })
    .catch(err => {
        console.log('err:', err);
    });
});

app.controller('profilesController', function($scope, $state, $rootScope) {
    console.log('profileCtrl!');
    console.log('user:', $scope.user);

    var username = $rootScope.user.username;
    console.log('username', username);
    $scope.user = $rootScope.user;
    $scope.profilePic = $rootScope.user.customData.profilePic;

  });