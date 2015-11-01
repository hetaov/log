'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('VisitCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
	console.log('visitCtrl');
    $scope.line = {
        labels: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
        series: ['活期宝', '定期宝'],
        data: [
          [651, 859, 9980, 181, 256, 550, 440],
          [4428, 2348, 3340, 5519, 186, 287, 990]
        ],
        onClick: function (points, evt) {
          console.log(points, evt);
        }
    };

    $scope.bar = {
        labels: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
        series: ['活期宝', '定期宝'],

		data: [
		   [65000, 25901, 2280, 33381, 54456, 22155, 33240],
		   [44228, 3348, 22140, 88919, 88886, 99927, 33290]
		]
    	
    };

	//$('.date').datepicker();

}]);
