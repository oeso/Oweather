'use strict';
angular.module('HashBangURLs', []).config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
    //$location.html5Mode(false).hashPrefix('!');
}]);

var proxyCallback = function(ar){

}