(function () {
    "use strict";

    angular.module('common', [])
        .constant('ApiPath', 'https://immense-savannah-54242.herokuapp.com')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();