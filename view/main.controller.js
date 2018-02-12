var app = angular.module('app', []);

app.controller('AppCtrl', [
    '$scope',
    '$http',
    function($scope, $http){
        $scope.viewNotes = function(){
            console.log('clicked on view button');
            window.location = 'http://localhost:8080/notes';
        };
    }
]);