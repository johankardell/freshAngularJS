/* global angular */

(function (module) {
    'use strict';
    module.controller('userController', userController);
    userController.$inject = ['$scope', '$routeParams', '$location'];

    function userController($scope, $routeParams, $location) {
        $scope.user = $routeParams.username;
        $scope.back = back;
        
        function back(){
            $location.path('/');
        }
    }
} (angular.module('app.angularJS')));