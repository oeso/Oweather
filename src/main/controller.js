/* main */
angular.module('oweather')
    .controller('mainCtrl',['$scope', '$rootScope', 'oweather-api', function($rootScope, $scope, api){
        $rootScope.doc.title = "Oweather Main";

        //메인 - 현재 기온, 기상, 미세먼지표시. 금일 시간대별 날씨 표시, 금주 요일별 날씨 표시. 우측 상단에 검색 아이콘 위치.
        //모든 api 호출은 controller에서 실시.
        //호출 방식1 : 위도경도 정보로 호출
        //호출 방식2 : 시군구 정보로 호출

        $scope.nowData;
        $scope.skyCode = "";
        console.log(2)

<<<<<<< HEAD

=======
        //사용자 설정 위/경도
        var userlat = "37.4870600000",
            userlon = "127.0460400000";
        
        
>>>>>>> aa72a03edf9283f45fae3a66ede0644b08f03dc3
        //현재 시간이 낮시간 또는 밤 시간인지에 따라서 다른 icon이 노출되어야 함.

        //시간대 별 api 호출
        api.nowTemper(function(err,o){
            $scope.nowData = o.weather.hourly[0];
            switch($scope.nowData.sky.code){
                case "SKY_O01" :
                    $scope.skyCode = "08";
                    if($rootScope.presentTime){
                        $scope.skyCode = "01";
                    }
                    break;
                case "SKY_O02" :
                    $scope.skyCode = "09";
                    if($rootScope.presentTime){
                        $scope.skyCode = "02";
                    }
                    break;
                case "SKY_O03" :
                    $scope.skyCode = "10";
                    if($rootScope.presentTime){
                        $scope.skyCode = "03";
                    }
                    break;
                case "SKY_O04" :
                    $scope.skyCode = "40";
                    if($rootScope.presentTime){
                        $scope.skyCode = "12";
                    }
                    break;
                case "SKY_O05" :
                    $scope.skyCode = "41";
                    if($rootScope.presentTime){
                        $scope.skyCode = "13";
                    }
                    break;
                case "SKY_O06" :
                    $scope.skyCode = "42";
                    if($rootScope.presentTime){
                        $scope.skyCode = "14";
                    }
                    break;
                case "SKY_O07" :
                    $scope.skyCode = "18";
                    break;
                case "SKY_O08" :
                    $scope.skyCode = "21";
                    break;
                case "SKY_O09" :
                    $scope.skyCode = "32";
                    break;
                case "SKY_O10" :
                    $scope.skyCode = "04";
                    break;
                case "SKY_O11" :
                    $scope.skyCode = "29";
                    break;
                case "SKY_O12" :
                    $scope.skyCode = "26";
                    break;
                case "SKY_O13" :
                    $scope.skyCode = "27";
                    break;
                case "SKY_O14" :
                    $scope.skyCode = "28";
                    break;

                default : $scope.skyCode = "38";
            }
        },{
            version:1, lat : userlat , lon: userlon
        });
<<<<<<< HEAD

    }])
    .directive('dirct', function(){
        return {
            restrict : "A",
            scope : {
                localScope : "=",
                dirctScope : "=",
                stScope : "="
            },
            //template : "<div>hi there~ , it's my directive</div>",
            replace : true,
            link : function(scope){
                console.log("scope :", scope)
                scope.localScope = {};
                scope.localScope.name = "Name!!!!";

            }
        }
    })
=======
        console.log($scope.skyCode);
    }])
>>>>>>> aa72a03edf9283f45fae3a66ede0644b08f03dc3
