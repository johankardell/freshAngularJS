/* global angular */

(function (module) {
    'use strict';

    module.config(config);
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            
            .when('/list', {
                templateUrl: 'list.html',
                controller: 'listController'
            })
            .when('/user/:username', {
                templateUrl: 'user.html',
                controller: 'userController'
            })
            .otherwise({ redirectTo: '/' });
    }
} (angular.module('app.angularJS', ['ngRoute'])));