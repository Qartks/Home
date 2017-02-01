/**
 * Created by qartks on 1/25/17.
 */
(function () {
    angular
        .module("Qartks")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/ParticleSystems", {
                templateUrl: "ParticleSystems.html"
            })
            .when("/SVM", {
                templateUrl: "SVM.html"
            })
            .when("/Disco", {
                templateUrl: "DiscoGolem.html"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
})();