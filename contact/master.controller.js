import { ContactDataService } from "./contact.data.js";

export class ContactMaster {

    static $inject = ["ContactDataService"];

    constructor(data) {
        this.data = data;
        this.activate();
    }

    activate() {
        this.data.getData()
            .then(result => {
                this.contacts = result;
                console.log("Contact data loaded");
            })
            .catch(reason => {
                console.error(reason);
            });
    }
    
}
