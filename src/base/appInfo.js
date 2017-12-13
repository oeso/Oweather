function startBtnDisplay(bool){
    if(bool){
        document.getElementById("startApp").style.display = "none";
        document.getElementById("loginFacebook").style.display = "block";
    }else{
        document.getElementById("startApp").style.display = "none";
        document.getElementById("loginFacebook").style.display = "block";
    };
};


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

    }]);

/* factory 등록시 주의 사항 : 아래와 같이 angular.module( 'oweather') 와 같이 써야 함. angular.module( 'oweather', ['$window', ...]) <- 여기에 종속물 넣으면 동작 안함 */
angular.module( 'oweather')
    .factory('oweather-api', ['$window','$http', function($window, $http) {
        var ow = 123;

        function nowTemper(callback, params, url){
            var rest = "";
            var req = {
                method : "GET",
                url : rest,
                params : params,
                timeout : HTTP_TIMEOUT
            };
            if(url){ req.url = url };
            $http(req).then(proxyCallback(callback))
        }


        return ow
    }]);

/* angular module */
angular.module('oweather')
    .controller('wrap', [ '$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http ) {
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
