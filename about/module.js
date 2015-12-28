import template from "./about.html";

import { About } from "./about.controller.js";

export let about = angular.module("about", [])
    .controller("About", About)
    .config(["$stateProvider", ($stateProvider) => {
        $stateProvider
            .state('about', {
                url: "/about",
                template: template,
                controller: "About as vm"
            });
    }]);
