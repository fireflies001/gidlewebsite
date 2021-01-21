app.controller('loginController', ['$scope', '$location',  function($scope, $location) {
    $scope.username = "admin";
    $scope.password = "password1";

    $scope.login = function(login,password) {
        if($scope.username == login || $scope.password == password){
            $location.url("/dashboard");
        }
    }
}]);