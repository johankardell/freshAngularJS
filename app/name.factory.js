/* global angular */

(function (module) {
    'use strict';
    module.factory('nameFactory', nameFactory);
    nameFactory.$inject = ['$http'];

    function nameFactory($http) {
        //var names = [];
        
        return {
            fetchNames: fetchNames,
            addName: addName
        };

        function getNames() {
            return fetchNames();
        }

        function addName(name) {
            // names.push(name);
            return $http.post('names.json', name);
        }

        function fetchNames() {
            return $http.get('/names.json');
        }
        
        
    }
} (angular.module('app.angularJS')));