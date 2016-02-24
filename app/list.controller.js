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
        $scope.getNames = getNames;

        function addName(name) {
            nameFactory.addName(name);
        }

        function getNames() {
            var promise = nameFactory.fetchNames();
            
            // then or success
            promise.then(function(data){
                $scope.names = data; 
            });
        }
        
        init();
        
    }
} (angular.module('app.angularJS')));