
/* route */
angular.module( 'travel', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {templateUrl: 'login/template.html', controller: 'login'})
            .when('/login', {templateUrl: 'login/template.html', controller: 'login'})
            .when('/loginSuccess', {templateUrl: 'login/login_success.html', controller: 'loginSuccess'})
            .when('/account', {templateUrl: 'account/template.html', controller: 'account'})
            .when('/terms', {templateUrl: 'terms/template.html'})
            .when('/feedlist', {templateUrl: 'feedlist/template.html', controller: 'feedlist'})
            .when('/reservation', {templateUrl: 'reservation/template.html', controller: 'reservation'})
            .when('/reservationSuccess', {templateUrl: 'reservationSuccess/template.html', controller: 'reservationSuccess'})
            .when('/error', {templateUrl: 'error/error.html'})

            .otherwise({redirectTo: '/error'});

        //$locationProvider.html5Mode(true);

    }]);

/* factory 등록시 주의 사항 : 아래와 같이 angular.module( 'travel') 와 같이 써야 함. angular.module( 'travel', ['$window', ...]) <- 여기에 종속물 넣으면 동작 안함 */
angular.module( 'travel')
    .factory('travel-api', ['$window','$http', function($window, $http) {
        return {
            academyMessages : {
                networkGetFail: '데이터 로드중 오류가 발생했습니다. 네트워크 상태 확인 후 다시 시도해주세요.',
                networkSetFail: '저장중 오류가 발생했습니다. 네트워크 상태 확인 후 다시 시도해주세요.',
                bookSetFail: '타석예약도중 오류가 발생했습니다. 네트워크 상태 확인 후 다시 시도해주세요.',
                lessonMemoNoPreData: '이전 작성된 레슨메모가 없습니다.',
                lessonMemoNoNextData: '이후 작성된 레슨메모가 없습니다.',
                lessonMemoRequireMemo: '연습 메모를 작성해 주세요.',
                noLessonData: '레슨 데이터가 없습니다.',
                noNasmoData: '나스모 데이터가 없습니다.',
                noOrderData: '구매 이력이 없습니다.',
                noGraphData: '연습데이터 로드 중 오류가 발생하였습니다. 잠시 후 다시 이용하세요'
            }
        }
    }]);
