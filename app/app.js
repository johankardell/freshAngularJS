/* global angular */

(function (module) {
    'use strict';
    
    module.config(config);
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider){
        $routeProvider
            .when('/list', {
                templateUrl: 'list.html',
                controller: 'listController'
            })
            .otherwise({ redirectTo: '/list' });
    }
} (angular.module('app.angularJS', ['ngRoute'])));