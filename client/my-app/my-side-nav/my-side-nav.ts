
class MySideNavController {
	
	constructor(private $mdSidenav, private $log) {
	
	}
    
    
    public close() {
       this.$mdSidenav('left').close()
        .then(() =>{
          this.$log.debug("close LEFT is done");
        });
    };	
    
}


export default function register(appModule : ng.IModule) {
    appModule.controller("MySideNavController", MySideNavController);
    appModule.directive('mySideNav', function(): angular.IDirective {
        return {
            restrict: 'E',
            templateUrl: "./my-app/my-side-nav/my-side-nav.html",
            controller: 'MySideNavController',
            controllerAs: 'vm'
        };
    });
}