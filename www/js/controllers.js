angular.module('starter')

.controller('AppCtrl', function($scope, $state, WeeklyService) {
  $scope.year = "2016";
  $scope.index = 1;
  $scope.weeks = WeeklyService.getWeeks("2016", $scope.index);

  $scope.next = function(){
    $scope.index += 9;
    $scope.weeks = WeeklyService.getWeeks("2016", $scope.index);
  }

  $scope.previous = function () {
    $scope.index -= 9;
    $scope.weeks = WeeklyService.getWeeks("2016", $scope.index);
  }
})
