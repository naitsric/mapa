var angularTodo = angular.module('angularMapa', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.get('http://localhost/api/mapa/map.json')
        .success(function(data) {
            $scope.todos = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $scope.showWindow = function(id){
        $("#myModal").find("#myModalLabel").html(this.todo.tittle);
        $("#myModal").find(".modal-body").html(this.todo.content);
        $("#myModal").modal({"trigger": 'click'});
    };
}
