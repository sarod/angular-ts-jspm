'use strict';
class DummyController {

	public name: string = 'ctrlValue';

	public handleClick(): void {
		console.log('handleClick');
	}
}


export default function registerDummyDirective(appModule: angular.IModule) {
	appModule.directive('dummy', function(): angular.IDirective {
		return {
			restrict: 'E',
			templateUrl: './dummy/dummy.html',
			controller: DummyController,
			controllerAs: 'vm'
		};
	});
}
