'use strict';

var app = angular.module('finalApp');


app.service('BeerSvc', function($http) {

  this.getBeer = function() {
    return $http.get('api/beer/random');
  };

  this.update = beer => {
    return $http.put(`/api/beer/${beer._id}`, auction);
  	}
});

// app.service('ProfileService', function($http) {
	
// 	this.nameSort = (username) => {
// 		return $http.get(`/api/auctions/users/${username}`);
// 	}

	
// })

// app.service('AuctionsService', function($http) {

// 	this.getAll = () => {
//     	return $http.get('/api/auctions');
//   	};

// 	this.create = auction => {
//     	return $http.post('/api/auctions', auction);
//   	}
	
// 	this.update = auction => {
//     	return $http.put(`/api/auctions/${auction._id}`, auction);
//   	}

//   	this.removeAuction = (auction) => {
//   		return $http.delete(`/api/auctions/${auction._id}`)
//   	}

//   	this.getThisAuction = (id) => {
//   		return $http.get(`/api/auctions/${id}`);
//   	}

// })