'use strict';
import * as ng from 'angular';

class MyAppController {

	public appName: string = 'MyApp';

	constructor(private $mdSidenav: angular.material.ISidenavService, private $log: angular.ILogService) {
		$log.log('MyAppController created');
	}

	public toggleLeft(): void {
		this.$mdSidenav('left').toggle();
	}


	public handleButtonClick(): void {
		this.$log.log('Button Clicked');
	}
}


export default function registerMyApp(appModule: ng.IModule): void {
	appModule.controller('MyAppController', MyAppController);
	appModule.directive('myApp', function(): ng.IDirective {
		return {
			bindToController: {},
			controller: 'MyAppController',
			controllerAs: 'vm',
			templateUrl: './my-app/my-app.html',
			restrict: 'E',
			scope: {}
		};
	});
}

