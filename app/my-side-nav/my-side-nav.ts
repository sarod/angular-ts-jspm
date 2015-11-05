'use strict';
import * as ng from 'angular';
class MySideNavController {

	constructor(private $mdSidenav: angular.material.ISidenavService, private $log: angular.ILogService) {

		$log.log('MySideNavController created');

	}

	public close(): void {
		this.$mdSidenav('left').close();
	}

}


function directiveFactory(): ng.IDirective {
	return {
		restrict: 'E',
		templateUrl: './my-side-nav/my-side-nav.html',
		controller: 'MySideNavController',
		controllerAs: 'vm'
	};
}

export default function registerMySideNav(appModule: ng.IModule) {
	appModule.controller('MySideNavController', MySideNavController);
	appModule.directive('mySideNav', directiveFactory);
}