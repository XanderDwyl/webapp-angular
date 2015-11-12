'use strict';

require('angular');

var MainController = require('./controllers/main')

var app = angular.module('app', []);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'views/home.html'
	});
});
app.controller('MainController', ['$scope', MainController]);
