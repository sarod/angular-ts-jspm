'use strict';
import * as angular from 'angular';
import registerDummyDirective from './dummy';

let appModule = angular.module('my-app', []);

registerDummyDirective(appModule);

// bootstrap angular manually on whole document
angular.element(document).ready(function() {
	angular.bootstrap(document, ['my-app']);
});

