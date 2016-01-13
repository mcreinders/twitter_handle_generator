/**
 * Created by user on 1/11/16.
 */
var app = angular.module('myApp', ['ngAnimate']);


app.controller('MyController', ['$scope', '$http', function($scope, $http){

    $scope.getTwitterName = function(){
        $http.get('/data').then(function(response){
            $scope.twitterName = response.data;
            console.log($scope.twitterName.data);
        });
    };

    $scope.data = {
        myLink: "https://twitter.com/login",
    }

    //this does the same thing as the block above
    //$scope.getTwitterName = function(){
    //    $http({
    //        method: 'GET',
    //        url: '/data'
    //    }).then(function(response){
    //        $scope.twitterName = response.data;
    //        console.log($scope.twitterName);
    //    })
    //}
}]);

