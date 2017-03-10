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
            .when("/particlesystems", {
                templateUrl: "ParticleSystems.html"
            })
            .when("/svm", {
                templateUrl: "SVM.html"
            })
            .when("/disco", {
                templateUrl: "DiscoGolem.html"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
})();