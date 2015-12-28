import template from "./app.html";
import "./app.css";

import "angular";
import "angular-ui-router";
import "ui-router-extras";
import "oclazyload";

import { SystemLazyLoadService } from "./systemLazyLoadService.js";

export let app = angular.module("app", ["ui.router", "ct.ui.router.extras", "oc.lazyLoad"])
    .service("SystemLazyLoadService", SystemLazyLoadService)
    .config(["$stateProvider", "$urlRouterProvider", "$futureStateProvider", (
        $stateProvider,
        $urlRouterProvider,
        $futureStateProvider) => {

        $stateProvider
            .state('home', {
                url: "",
                template: template
            });

        $futureStateProvider.futureState({
            stateName: "contact",
            url: "/contact",
            type: "systemLazy",
            src: "contact/module.js",
            key: "contact"
        });

        $futureStateProvider.futureState({
            stateName: "about",
            url: "/about",
            type: "systemLazy",
            src: "about/module.js",
            key: "about"
        });

        $urlRouterProvider.otherwise("");

        $futureStateProvider.stateFactory("systemLazy", ["SystemLazyLoadService", "futureState", (loadService, futureState) => {
            return loadService.load(futureState.src, futureState.key);
        }]);
    }])
    .run(['$rootScope', '$state', '$stateParams',
        ($rootScope, $state, $stateParams) => {
                
            // The below codes are for debugging purpose only

            $rootScope["$state"] = $state;
            $rootScope["$stateParams"] = $stateParams; 

            // Credits: Adam's answer in http://stackoverflow.com/a/20786262/69362
            // Paste this in browser's console
            ////var $rootScope = angular.element(document.querySelectorAll("[ui-view]")[0]).injector().get('$rootScope');

            $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
                console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
                console.info($state);
            });

            $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
                console.log('$stateChangeError - fired when an error occurs during transition.');
                console.info($state);
                console.error(error);
            });

            $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
                console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
                console.info($state);
            });

            $rootScope.$on('$viewContentLoaded', (event) => {
                console.log('$viewContentLoaded - fired after dom rendered', event);
                console.info($state);
            });

            $rootScope.$on('$stateNotFound', (event, unfoundState, fromState, fromParams) => {
                console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
                console.log(unfoundState, fromState, fromParams);
                console.info($state);
            });
        }]);
