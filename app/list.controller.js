/* global angular */

(function (module) {
    'use strict';
    module.controller('listController', listController);
    listController.$inject = ['$scope', 'nameFactory'];

    function listController($scope, nameFactory) {
        $scope.message = 'Hello world';
        $scope.enableFilter = false;
        $scope.enableAdd = true;
        $scope.addName = addName;
        
        function addName(name) {
            nameFactory.addName(name);
        }

        function getNames() {
            var promise = nameFactory.getNames();

            promise.success(function (data) {
                $scope.names = data;
            });
        }

        function activate() {
            getNames();
        }

        activate();
    }
} (angular.module('app.angularJS')));