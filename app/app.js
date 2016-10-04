var app = angular.module("GlobersApp", []);

app.controller("mainController", function ($http) {
    var scope = this;
    var url = 'http://demo1966713.mockable.io/globers';
    scope.globers = null;

    (function () {
        $http.get(url).success(function (data) {
            scope.globers = data;
        })
    })();

    scope.contact = function (e) {
        e.preventDefault();
        alert("Contacto realizado...");
    }
});