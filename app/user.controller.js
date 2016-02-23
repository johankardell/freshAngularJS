/* global angular */

(function (module) {
    'use strict';
    module.controller('userController', userController);
    userController.$inject = ['$scope', '$routeParams'];

    function userController($scope, $routeParams) {
        $scope.user = $routeParams.username;

    }
} (angular.module('app.angularJS')));