System.register(["angular", "angular-material/angular-material.css!", "angular-material", "normalize.css", "my-app/my-side-nav/my-side-nav"], function(exports_1) {
    var angular, my_side_nav_1;
    var myAppModule, MyAppController;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (my_side_nav_1_1) {
                my_side_nav_1 = my_side_nav_1_1;
            }],
        execute: function() {
            myAppModule = angular.module("myApp", ["ngMaterial"]);
            my_side_nav_1.default(myAppModule);
            MyAppController = (function () {
                function MyAppController($scope, $timeout, $mdSidenav, $log) {
                    this.$scope = $scope;
                    this.$timeout = $timeout;
                    this.$mdSidenav = $mdSidenav;
                    this.$log = $log;
                }
                MyAppController.prototype.toggleLeft = function () {
                    var navId = "left";
                    this.$mdSidenav(navId)
                        .toggle()
                        .then(function () {
                        this.$log.debug("toggle " + navId + " is done");
                    });
                };
                return MyAppController;
            })();
            myAppModule.controller("MyAppControler", MyAppController);
            myAppModule.directive('myApp', function () {
                return {
                    restrict: 'E',
                    templateUrl: './my-app/my-app.html',
                    controller: 'MyAppControler',
                    controllerAs: 'vm'
                };
            });
            // Bootstrap angular manually on whole document
            angular.element(document).ready(function () {
                angular.bootstrap(document, ["myApp"]);
            });
        }
    }
});
//# sourceMappingURL=my-app.js.map