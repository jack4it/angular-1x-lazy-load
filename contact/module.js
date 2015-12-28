import master from "./master.html";
import detail from "./detail.html";

import { ContactMaster } from "./master.controller.js";
import { ContactDetail } from "./detail.controller.js";
import { ContactDataService } from "./contact.data.js";

export let contact = angular.module("contact", [])
    .controller("ContactMaster", ContactMaster)
    .controller("ContactDetail", ContactDetail)
    .service("ContactDataService", ContactDataService)
    .config(["$stateProvider", ($stateProvider) => {
        $stateProvider
            .state('contact', {
                abstract: true,
                url: "/contact",
                template: "<ui-view/>"
            })
            .state('contact.list', {
                url: "",
                template: master,
                controller: "ContactMaster as vm"
            })
            .state('contact.detail', {
                url: "/:contactId",
                template: detail,
                controller: "ContactDetail as vm"
            });

    }]);
