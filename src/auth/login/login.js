(function () {
    'use strict';
    angular.module('app.auth')
        .controller('LoginCtrl', LoginCtrl);

    /* @ngInject */
    function LoginCtrl($state, $stateParams, $scope, authCurd, authBackend) {
        var self = this;
        self.form = {
            Email: '',
            Password: ''
        };
        activate();

        self.login = login;

        function activate() {

        }


        function login() {
            authCurd.login(self.form, $scope.loginForm)
        }
    }
})();