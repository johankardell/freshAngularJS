/* global angular */

(function (module) {
    'use strict';
    
    module.config(config);
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider){
        $routeProvider
            .when('/main', {
                templateUrl: 'main.html',
                controller: 'mainController'
            })
            .otherwise({ redirectTo: '/main' });
    }
} (angular.module('app.angularJS', ['ngRoute'])));