'use strict';

// これはどこにおけば良いのやら。。
var metainfo = {
  records: [
    {property: "id", label: "ID"},
    {property: "name", label: "Name"},
  ]
};

var module = angular.module('magicTableApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  $scope.positions = [{ Name: "Quarterback", Code: "QB" },
                               { Name: "Wide Receiver", Code: "WR" }
                              ]; 
    $scope.records = [
      {id: 1, name: "andy"},
      {id: 2, name: "brian"},
      {id: 3, name: "canal"}
    ];
  }]);

module.directive('head', function(){
  var buildHeader = function() {
    return '<tr>' + jQuery.map(metainfo.records, function(e) {
      return '<td>' + e.label + '</td>';
    }) + '</tr>';
  }
  return {
    template: (function(){ return buildHeader()})()
  }
});

module.directive("record", function(){
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

