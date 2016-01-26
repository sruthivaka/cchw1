(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/prime', {
                controller: 'PrimeController',
                templateUrl: 'content/prime.html'
            })

            .otherwise({ redirectTo: '/prime' });
    }

})();

