'use strict';
import * as ng from 'angular';

class MyAppController {


	public appName: string = 'MyApp';

	constructor(private $mdSidenav: angular.material.ISidenavService, private $log: angular.ILogService) {
		$log.log('MyAppController created');
	}

	public toggleLeft() {
		this.$mdSidenav('left').toggle();
	}


	public handleButtonClick() {
		this.$log.log('Button Clicked');
	}
}


export default function registerMyApp(appModule: ng.IModule) {
	appModule.controller('MyAppControler', MyAppController);
	appModule.directive('myApp', function(): ng.IDirective {
		return {
			restrict: 'E',
      templateUrl: './my-app/my-app.html',
			controller: MyAppController,
			controllerAs: 'vm'
		};
	});
}

