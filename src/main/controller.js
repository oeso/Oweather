/* main */
angular.module('oweather')
    .controller('mainCtrl',['$scope', '$rootScope', 'oweather-api', function($rootScope, $scope, api){
        $rootScope.doc.title = "Oweather";
        //메인 - 현재 기온, 기상, 미세먼지표시. 금일 시간대별 날씨 표시, 금주 요일별 날씨 표시. 우측 상단에 검색 아이콘 위치.
        //모든 api 호출은 controller에서 실시.

        $scope.nowState = api;
        $scope.temp = "temperature";
        $scope.dust = "dust";


    }])