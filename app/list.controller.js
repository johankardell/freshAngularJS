/* global angular */

(function (module) {
    'use strict';
    module.controller('listController', listController);
    listController.$inject = ['$scope'];

    function listController($scope) {
        $scope.message = 'Hello world';
        $scope.names = ['Tommy', 'Anders', 'Peter'];
        $scope.enableFilter = false;
        $scope.enableAdd = true;
        $scope.addName = addName;
        
        function addName(name){
            $scope.names.push(name);
        }
    }
} (angular.module('app.angularJS')));