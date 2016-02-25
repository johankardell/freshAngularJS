/* global angular */

(function (module) {
    'use strict';
    module.factory('nameFactory', nameFactory);
    nameFactory.$inject = ['$http'];

    function nameFactory($http) {
        return {
            getNames: getNames,
            addName: addName
        };

        function getNames() {
            return $http.get('/names.json');
        }

        function addName(name) {
            return $http.post('names.json', name);
        }
    }
} (angular.module('app.angularJS')));