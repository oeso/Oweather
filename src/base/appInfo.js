
/* route */
angular.module( 'oweather',  [ 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {templateUrl: 'main/template.html', controller: 'mainCtrl'})
            .when('/main', {templateUrl: 'main/template.html', controller: 'mainCtrl'})
            .when('/add', {templateUrl: 'add/template.html', controller: 'addCtrl'})
            .when('/search', {templateUrl: 'search/template.html', controller: 'searchCtrl'})
            .when('/alarm', {templateUrl: 'alarm/template.html', controller: 'alarmCtrl'})
            .when('/agreement', {templateUrl: 'agreement/template.html', controller: 'agreementCtrl'})
            .when('/info', {templateUrl: 'info/template.html', controller: 'infoCtrl'})
            .when('/error', {templateUrl: 'error/error.html', controller: 'errorCtrl'})

            .otherwise({redirectTo: '/main'});

        //$locationProvider.html5Mode(true);

    }])
    .factory('oweather-api', ['$window','$rootScope','$http', function($window, $rootScope, $http) {
        /* factory 등록시 주의 사항 : 아래와 같이 angular.module( 'oweather') 와 같이 써야 함. angular.module( 'oweather', ['$window', ...]) <- 여기에 종속물 넣으면 동작 안함 */
        //SK open api uri 표준 : http(s)://apis.skplanetx.com/[Service Area]/[Resource Category]/{Resource Path}/../{Path Variable} ?{Query String}

        //TODO: proxyCallback 보강필요 (timeout 처리 등등...)
        function proxyCallback(callback) {
            return function (res) {
                console.log(res)
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

        var proxyCallback = $rootScope.proxyCallback;

        function nowTemper(callback, param){
            //var version, lat, lon, city, county, village;
            param.city="";
            param.county="";
            param.village="";
            var rest = "http://apis.skplanetx.com/weather/current/hourly?version=1&lat=37.4870600000&lon=127.0460400000";
            var req = {
                method : "GET",
                url : rest,
                headers : {
                    Accept : "application/json",
                    appKey : "3a0006df-8fa2-3f8d-aff2-d19f4c2209f1"
                }
            };
            $http(req).then(proxyCallback(callback))
        };

        return {
            nowTemper : nowTemper
        }
    }])
    .controller('wrap', [ '$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http ) {
        $rootScope.proxyCallback = function(ar){
            console.log("wrap")
        }
        $rootScope.doc = {
            title:'2Depth | 1Depth | AppName'
        };

        $scope.headers = function(response){
            $scope.userPic = response.picture.data.url;
            $scope.userMail = response.email;
            $scope.$apply();
        };


        //LNB OPEN
        $scope.lnbOpen = function(){
            document.getElementById("aside").style.left = 0;
        };
        //LNB CLOSE
        $scope.lnbClose = function(){
            document.getElementById("aside").style.left = -500+"px";
        };
        $scope.fbLogout = function(){
            console.log('로그아웃을 눌렀음');
            FB.getLoginStatus(function(response) { //문서 로드되자마자 페이스북 로그인 여부 확인

                if (response.status === 'connected') {
                    console.log("facebook 로그인 상태입니다.");
                    FB.logout(function(response) {
                        console.log("액세스 token is ::",FB.getAuthResponse());
                        window.location.reload();
                    });
                    console.log("logout 완료");
                } else {
                    document.location.href = document.location.origin + "/#/login"; //login 화면으로 이동
                    console.log('facebook 미로그인 상태입니다.');
                };
            },true);

        }
    }])
