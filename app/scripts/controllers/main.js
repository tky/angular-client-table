'use strict';

angular.module('magicTableApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  $scope.positions = [{ Name: "Quarterback", Code: "QB" },
                               { Name: "Wide Receiver", Code: "WR" }
                              ]; 
    $scope.metainfo = {
      records: [
        {property: "id"},
        {property: "name"},
      ]
    };
    $scope.records = [
      {id: 1, name: "andy"},
      {id: 2, name: "brian"},
      {id: 3, name: "canal"}
    ];
  }])
.directive("record", function(){
    return {
        template: "<tr><td>{{record.id}}</td><td>{{record.name}}</td></tr>",
        replace: false,
        scope: {
          record: '='
        }
    }
});
