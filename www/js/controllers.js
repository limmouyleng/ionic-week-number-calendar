angular.module('starter')

.controller('AppCtrl', function($scope, $filter, WeeklyService) {
  $scope.year = "2016";
  $scope.weeks = WeeklyService.getWeeks("2016");
})
