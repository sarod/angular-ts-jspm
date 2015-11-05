import * as ng from "angular";

import "normalize.css";
import "angular-material/angular-material.css!";
import "angular-material";




let myAppModule = ng.module("myApp", ["ngMaterial"]);

registerMySideNav(myAppModule);

class MyAppController {

    constructor(private $scope, private $timeout, private $mdSidenav, private $log) {

	}

	public toggleLeft() {
		let navId = "left";
		this.$mdSidenav(navId)
					.toggle()
					.then(function() {
						this.$log.debug("toggle " + navId + " is done");
					});
	}
}



myAppModule.controller("MyAppControler", MyAppController);
myAppModule.directive('myApp', function(): ng.IDirective {
	return {
		restrict: 'E',
		templateUrl: './my-app/my-app.html',
		controller: 'MyAppControler',
		controllerAs: 'vm'
	};
});



// Bootstrap angular manually on whole document
ng.element(document).ready(function() {
    ng.bootstrap(document, ["myApp"]);
});




