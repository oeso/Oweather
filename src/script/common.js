'use strict';

angular.module('HashBangURLs', []).config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
    //$location.html5Mode(false).hashPrefix('!');
}]);


angular.module('oweatherBase', ['HashBangURLs', 'ngLocale']) // for 1.2rc1 , 'ngRoute'
    .config(['$httpProvider', '$logProvider', function ($httpProvider, $logProvider) {    // for 1.2rc1
    $location.hashPrefix('!');
    console.log(111)
        $rootScope.proxyCallback = function(ar){
            console.log("wrap")
        }
    //$location.html5Mode(false).hashPrefix('!');


    //TODO: proxyCallback 보강필요 (timeout 처리 등등...)
    function proxyCallback(callback) {
        return function (res) {
            if (res.status < 200 || res.status >= 300) {
                return callback(res);
            }
            if (!res.data) {
                callback({message: 'no data!'});
            }
            return callback(null, res.data);
        };
    }
    $rootScope.proxyCallback = proxyCallback;
}]);
