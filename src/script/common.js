'use strict';

/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'\t4E%2B2L6BkXBizevLCBfSBzFCHGAlSTCX%2Fvp%2FXQ8XxAiyZ4KlIWuysTvGXDZMrJKceBsd4Ahk%2Bcxf%2Ff%2FTY1P4JVw%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*한 페이지 결과 수*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지 번호*/
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('서울'); /*시도 이름 (서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종)*/
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /*요청 데이터기간 (시간 : HOUR, 하루 : DAILY)*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    console.log(this)
    if (this.readyState == 4) {
        console.log('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);
    }
};

xhr.send('');

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
    $rootScope.dimState = false;

    $rootScope.presentStats = "bg_cloudy";
        console.log (angular.element( document.querySelector("#aside")) )

        $rootScope.on = false;
        //LNB OPEN
        $rootScope.lnbOpen = function(){
            $rootScope.on = true
            $rootScope.dimState = true;
        };
        //LNB CLOSE
        $rootScope.lnbClose = function(){
            $rootScope.on = false;
            $rootScope.dimState = false;
        };
        $rootScope.lnbMove = function(){
            $rootScope.lnbStat = false;
    }

    $rootScope.asideOut = function(e){
        $rootScope.on = false;
        $rootScope.dimState = false;
        if(e.target!= angular.element( document.getElementById("aside")) && $rootScope.lnbStat == true ){
            $rootScope.lnbClose();
        }
    }

}]);
