var Note = angular.module('Note', []);

function mainController($scope, $http){
    //When on page show all Notes
    $http.get('/notes')
    .success(function(data){
        $scope.notes = data;
        console.log(data);
    })
    .error(function(data){
        console.log('Error ' + data);
    });

    $scope.viewNotes = function(req, res){
        res.sendfile('../../view/notes.html');
        console.log('clicked on View button');
    };
}