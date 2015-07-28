var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController',['$scope','$filter', '$timeout', function($scope,$filter,$timeout) {
   
    
    $scope.originalname= 'Chetan';
    $scope.formattedname=$filter('uppercase')($scope.originalname);
   
    $timeout(function(){
    $scope.formattedname='everyone';
    },3000);
    
    $timeout(function(){
    $scope.formattedname=$scope.originalname;
        
    },6000);
   
    $scope.handle='';
    $scope.lowercasehandle= function(){ return $filter('lowercase')($scope.handle);};
    
    $scope.$watch ('handle',function( newValue , oldValue)
    {
    console.info('Changed');
    console.log('new:' +newValue);
    console.log('old: '+oldValue);
    });

}]);

