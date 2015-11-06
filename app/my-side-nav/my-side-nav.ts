'use strict';
import * as ng from 'angular';
class MySideNavController {

	public name: string;

	constructor(private $mdSidenav: angular.material.ISidenavService, private $log: angular.ILogService) {

		$log.log('MySideNavController created');

	}

	public close(): void {
		this.$mdSidenav('left').close();
	}
}

export default function registerMySideNav(appModule: ng.IModule): void {
	appModule.controller('MySideNavController', MySideNavController);
	appModule.directive('mySideNav', function(): ng.IDirective {
		return {
			bindToController: {},
			controller: 'MySideNavController',
			controllerAs: 'vm',
			templateUrl: './my-side-nav/my-side-nav.html',
			restrict: 'E',
			scope: {}
		};
	});
}
