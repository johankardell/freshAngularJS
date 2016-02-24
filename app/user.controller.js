/* global angular */

(function (module) {
    'use strict';
    module.controller('userController', userController);
    userController.$inject = ['$scope', '$routeParams'];

    function userController($scope, $routeParams) {
        $scope.user = $routeParams.username;
        $scope.back = function(){
            $location.path('/');
        }
    }
} (angular.module('app.angularJS')));