var app = angular.module('app',[]);
app.controller("IndexController",['$scope', '$http', function($scope, $http){
    $scope.cat = {};
    $scope.cats = [];
    var fetchCats = function(){
        console.log("Fetching cats");
        return $http.get('/cats').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch cats from the API');
            }
            $scope.cat = {};
            $scope.cats = response.data;
            return response.data;
            console.log(response);
        })
    };
    $scope.add = function(cat){
        return $http.post('/add', cat).then(fetchCats);
    };
    fetchCats();
}]);