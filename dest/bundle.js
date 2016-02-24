/* global angular */

(function (module) {
    'use strict';

    module.config(config);
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'list.html',
                controller: 'listController'
            })
            .when('/user/:username', {
                templateUrl: 'user.html',
                controller: 'userController'
            })
            .otherwise({ redirectTo: '/list' });
    }
} (angular.module('app.angularJS', ['ngRoute'])));
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
    }
} (angular.module('app.angularJS')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImxpc3QuY29udHJvbGxlci5qcyIsIm5hbWUuZmFjdG9yeS5qcyIsInVzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgYW5ndWxhciAqL1xyXG5cclxuKGZ1bmN0aW9uIChtb2R1bGUpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBtb2R1bGUuY29uZmlnKGNvbmZpZyk7XHJcbiAgICBjb25maWcuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWcoJHJvdXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgICAgICAud2hlbignL2xpc3QnLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2xpc3QuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnbGlzdENvbnRyb2xsZXInXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC53aGVuKCcvdXNlci86dXNlcm5hbWUnLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3VzZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAndXNlckNvbnRyb2xsZXInXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiAnL2xpc3QnIH0pO1xyXG4gICAgfVxyXG59IChhbmd1bGFyLm1vZHVsZSgnYXBwLmFuZ3VsYXJKUycsIFsnbmdSb3V0ZSddKSkpOyIsIi8qIGdsb2JhbCBhbmd1bGFyICovXHJcblxyXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgbW9kdWxlLmNvbnRyb2xsZXIoJ2xpc3RDb250cm9sbGVyJywgbGlzdENvbnRyb2xsZXIpO1xyXG4gICAgbGlzdENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ25hbWVGYWN0b3J5J107XHJcblxyXG4gICAgZnVuY3Rpb24gbGlzdENvbnRyb2xsZXIoJHNjb3BlLCBuYW1lRmFjdG9yeSkge1xyXG4gICAgICAgICRzY29wZS5tZXNzYWdlID0gJ0hlbGxvIHdvcmxkJztcclxuICAgICAgICAkc2NvcGUuZW5hYmxlRmlsdGVyID0gZmFsc2U7XHJcbiAgICAgICAgJHNjb3BlLmVuYWJsZUFkZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFkZE5hbWUgPSBhZGROYW1lO1xyXG4gICAgICAgICRzY29wZS5nZXROYW1lcyA9IGdldE5hbWVzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGROYW1lKG5hbWUpIHtcclxuICAgICAgICAgICAgbmFtZUZhY3RvcnkuYWRkTmFtZShuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldE5hbWVzKCkge1xyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5hbWVGYWN0b3J5LmZldGNoTmFtZXMoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHRoZW4gb3Igc3VjY2Vzc1xyXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubmFtZXMgPSBkYXRhOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IChhbmd1bGFyLm1vZHVsZSgnYXBwLmFuZ3VsYXJKUycpKSk7IiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cclxuXHJcbihmdW5jdGlvbiAobW9kdWxlKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBtb2R1bGUuZmFjdG9yeSgnbmFtZUZhY3RvcnknLCBuYW1lRmFjdG9yeSk7XHJcbiAgICBuYW1lRmFjdG9yeS4kaW5qZWN0ID0gWyckaHR0cCddO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5hbWVGYWN0b3J5KCRodHRwKSB7XHJcbiAgICAgICAgLy92YXIgbmFtZXMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmZXRjaE5hbWVzOiBmZXRjaE5hbWVzLFxyXG4gICAgICAgICAgICBhZGROYW1lOiBhZGROYW1lXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0TmFtZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5hbWVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGROYW1lKG5hbWUpIHtcclxuICAgICAgICAgICAgLy8gbmFtZXMucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJ25hbWVzLmpzb24nLCBuYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZldGNoTmFtZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9uYW1lcy5qc29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IChhbmd1bGFyLm1vZHVsZSgnYXBwLmFuZ3VsYXJKUycpKSk7IiwiLyogZ2xvYmFsIGFuZ3VsYXIgKi9cclxuXHJcbihmdW5jdGlvbiAobW9kdWxlKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBtb2R1bGUuY29udHJvbGxlcigndXNlckNvbnRyb2xsZXInLCB1c2VyQ29udHJvbGxlcik7XHJcbiAgICB1c2VyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvdXRlUGFyYW1zJ107XHJcblxyXG4gICAgZnVuY3Rpb24gdXNlckNvbnRyb2xsZXIoJHNjb3BlLCAkcm91dGVQYXJhbXMpIHtcclxuICAgICAgICAkc2NvcGUudXNlciA9ICRyb3V0ZVBhcmFtcy51c2VybmFtZTtcclxuICAgICAgICAkc2NvcGUuYmFjayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IChhbmd1bGFyLm1vZHVsZSgnYXBwLmFuZ3VsYXJKUycpKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
