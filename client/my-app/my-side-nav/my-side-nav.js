System.register([], function(exports_1) {
    var MySideNavController;
    function register(appModule) {
        appModule.controller("MySideNavController", MySideNavController);
        appModule.directive('mySideNav', function () {
            return {
                restrict: 'E',
                templateUrl: "./my-app/my-side-nav/my-side-nav.html",
                controller: 'MySideNavController',
                controllerAs: 'vm'
            };
        });
    }
    exports_1("default", register);
    return {
        setters:[],
        execute: function() {
            MySideNavController = (function () {
                function MySideNavController($mdSidenav, $log) {
                    this.$mdSidenav = $mdSidenav;
                    this.$log = $log;
                }
                MySideNavController.prototype.close = function () {
                    var _this = this;
                    this.$mdSidenav('left').close()
                        .then(function () {
                        _this.$log.debug("close LEFT is done");
                    });
                };
                ;
                return MySideNavController;
            })();
        }
    }
});
//# sourceMappingURL=my-side-nav.js.map