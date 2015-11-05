'use strict';
class DummyController {

	public name: string = 'ctrlValue';

	public handleClick(): void {
		console.log('handleClick');
	}
}

export default function registerDummyDirective(appModule: angular.IModule): void {
	appModule.directive('dummy', function(): angular.IDirective {
		return {
			bindToController: {},
			controller: DummyController,
			controllerAs: 'vm',
			templateUrl: './dummy/dummy.html',
			restrict: 'E',
			scope: {}
		};
	});
}
