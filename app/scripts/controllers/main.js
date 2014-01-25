'use strict';

// これはどこにおけば良いのやら。。
var metainfo = {
  records: [
    {property: "id", label: "ID", sort: false, filter: false},
    {property: "name", label: "Name", sort: true, filter: true}
  ]
};

var module = angular.module('magicTableApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  $scope.currentPage = 0;
  $scope.pageSize = 10;
                              
  $scope.getMetaInfo = function() {
    return metainfo;
  };
  $scope.numberOfPages = function() {
    if ($scope.filteredRecords) {
      return Math.ceil($scope.filteredRecords.length / $scope.pageSize);
    } else {
      return 0;
    }
  }

    $scope.records = [
      {id: 1, name: "andy", description: "aaa"},
      {id: 2, name: "brian"},
      {id: 3, name: "canal"},
      {id: 4, name: "dany"},
      {id: 5, name: "elen"},
      {id: 6, name: "fany"},
      {id: 7, name: "geronica"},
      {id: 8, name: "hera"},
      {id: 9, name: "ira"},
      {id: 10, name: "jenkins"},
      {id: 11, name: "lenda"},
      {id: 12, name: "murata"}
    ];
  }]);

module.directive('filter', function(){
  var buildHeader = function() {
    return jQuery.map(metainfo.records, function(e) {
      if (e.sort) {
        return '<td><input type="text" ng-model="query.' + e.property + '" ng-change="currentPage = 0"/></td>';
      } else {
        return '<td></td>';
      }
    });
  }
  return {
    template: (function(){ return buildHeader()})()
  }
});

module.directive('head', function(){
  var buildHeader = function() {
    return jQuery.map(metainfo.records, function(e) {
      if (e.sort) {
        return '<td><a href="" ng-click="predicate=\'' + e.property + '\'; reverse=!reverse">' + e.label + '</a></td>';
      } else {
        return '<td>' + e.label + '</td>';
      }
    });
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
         tds[i] = '<td>' + '{{record["' + m.property + '"]}}</td>';
       }
       var v =  tds.join('') ;
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

module.filter('startFrom', function() {
    return function(input, start) {
        if (!input) {
          return input;
        }
        start = +start; //parse to int
        return input.slice(start);
    }
});
