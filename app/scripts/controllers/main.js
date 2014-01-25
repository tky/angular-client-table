'use strict';

// これはどこにおけば良いのやら。。
var metainfo = {
  records: [
    {property: "id"},
    {property: "name"},
  ]
};

angular.module('magicTableApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  $scope.positions = [{ Name: "Quarterback", Code: "QB" },
                               { Name: "Wide Receiver", Code: "WR" }
                              ]; 
    $scope.records = [
      {id: 1, name: "andy"},
      {id: 2, name: "brian"},
      {id: 3, name: "canal"}
    ];
  }])
.directive("record", function(){
     var buildRow = function() {
       var tds = new Array();
       for (var i = 0; i < metainfo.records.length; i++) {
         var m = metainfo.records[i];
         tds[i] = '<td>{{record["' + m.property + '"]}}</td>';
       }
       var v =  '<tr>' + tds.join('') + '</tr>';
       return v;
     };
    return {
        template: (function(){return buildRow()})(),
        replace: false,
        scope: {
          record: '='
        }
    }
});
