import { ContactDataService } from "./contact.data.js";

export class ContactDetail {

    static $inject = ["ContactDataService", "$stateParams"];

    constructor(data, $stateParams) {
        this.data = data;
        this.$stateParams = $stateParams;
        this.activate();
    }

    activate() {
        this.data.getData().then(result => {
            result.some(value => {
                if (value.id === parseInt(this.$stateParams["contactId"])) {
                    this.id = value.id;
                    this.name = value.name;
                    this.dob = value.dob;
                    return true;
                }
            })
        })
    }
    
}
