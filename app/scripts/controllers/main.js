'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
    $scope.line = {
		labels: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
		series: ['活期宝', '定期宝'],
        data: [
          [65100, 5988, 1180, 81000, 11156, 51115, 11240],
          [28777, 231148, 988140, 127819, 1186, 332227, 221190]
        ],
        onClick: function (points, evt) {
          console.log(points, evt);
        }
    };
  });
