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
                templateUrl: "home.html",
                controller: function ($location) {
                    vm = this;

                    vm.goToPS = goToPS;
                    vm.goToSVM = goToSVM;
                    vm.goToDisco = goToDisco;

                    function goToDisco() {
                        $location.url("/disco");
                    }

                    function goToSVM() {
                        $location.url("/svm");
                    }

                    function goToPS() {
                        $location.url("/particlesystems");
                    }
                },
                controllerAs: "model"
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