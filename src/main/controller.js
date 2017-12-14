/* main */
angular.module('oweather')
    .controller('mainCtrl',['$scope', '$rootScope', 'oweather-api', function($rootScope, $scope, api){
        $rootScope.doc.title = "Oweather";

        //메인 - 현재 기온, 기상, 미세먼지표시. 금일 시간대별 날씨 표시, 금주 요일별 날씨 표시. 우측 상단에 검색 아이콘 위치.
        //모든 api 호출은 controller에서 실시.



        //시간대 별 api 호출
        api.nowTemper(function(err,o){
            console.log(o);
            $scope.nowState = o.weather.hourly[0].temperature.tc;
            $scope.explain = o.weather.hourly[0].sky.name;
        },{version:1, lat : "37.4870600000" , lon: "127.0460400000" } )


    }])