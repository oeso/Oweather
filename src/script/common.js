'use strict';
//
// angular.module('HashBangURLs', []).config(['$locationProvider', function($location) {
//     $location.hashPrefix('!');
//     //$location.html5Mode(false).hashPrefix('!');
// }]);
//
//
// angular.module('oweatherBase', ['HashBangURLs', 'ngLocale']) // for 1.2rc1 , 'ngRoute'
//     .config(['$httpProvider', '$logProvider', function ($httpProvider, $logProvider) {    // for 1.2rc1
//         $location.hashPrefix('!');
//         console.log(111)
//         $rootScope.proxyCallback = function(ar){
//             console.log("wrap")
//         }
//         //$location.html5Mode(false).hashPrefix('!');
//
//
//         //TODO: proxyCallback 보강필요 (timeout 처리 등등...)
//         function proxyCallback(callback) {
//             return function (res) {
//                 if (res.status < 200 || res.status >= 300) {
//                     return callback(res);
//                 }
//                 if (!res.data) {
//                     callback({message: 'no data!'});
//                 }
//                 return callback(null, res.data);
//             };
//         }
//         $rootScope.proxyCallback = proxyCallback;
//     }]);

angular.module('oweather')
.controller('commonCtrl', [ '$window', '$rootScope', '$scope', '$location', '$http', '$filter', '$document', function($window, $rootScope, $scope, $location, $http, $filter, $document ) {
    //현재 시간이 낮시간 또는 밤 시간인지에 따라서 다른 icon이 노출되어야 함.

    /* 일단 현재 위치와 시간을 네이티브로 부터 받아야 함.
        HybridFunction 사용 예정. 일단 Angular 개발은 임시 데이터로 시작하겠음.
    */
    $rootScope.presentTime = $filter("date")(new Date(), 'H');
    if( $rootScope.presentTime < 6 && $rootScope.presentTime > 18 ){
        $rootScope.presentTime = 0; // 밤
    }else{
        $rootScope.presentTime = 1; // 낮
    };

    $rootScope.doc = {};
    $rootScope.lnbStat = false;
    $rootScope.layerStat = false;
console.log(angular.element( document.querySelector("#aside")    )   )
    console.log( document.querySelector("#aside")  )

    //LNB OPEN
    $rootScope.lnbOpen = function(){
        $rootScope.lnbStat = true;
        $rootScope.layerStat = true;
        console.log($rootScope.lnbStat )
        document.getElementById("aside").style.left = 0;
    };
    //LNB CLOSE
    $rootScope.lnbClose = function(){
        $rootScope.lnbStat = false;
        $rootScope.layerStat = false;
        document.getElementById("aside").style.left = -500+"px";
    };
    $rootScope.lnbMove = function(){
        $rootScope.lnbStat = false;
    }

    $rootScope.asideOut = function(e){
        if(e.target!= $document[0].getElementById("aside") && $rootScope.lnbStat == true ){
            $rootScope.lnbClose();
        }
    }

}])
