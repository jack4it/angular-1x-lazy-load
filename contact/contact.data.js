export class ContactDataService {

    static $inject = ["$timeout", "$q"];

    constructor($timeout, $q) {
        this.$timeout = $timeout;
        this.$q = $q;
    }

    getData() {
        let deferred = this.$q.defer();
        if (this.cache) {
            deferred.resolve(this.cache);
        } else {
            this.$timeout(() => {
                let data = [
                    { id: 1, name: "Jack", dob: "08/30/1980" },
                    { id: 2, name: "Eugenia", dob: "10/20/1981" }
                ];

                this.cache = data;
                deferred.resolve(data);
            }, 1000)
        }

        return deferred.promise;
    }

//     async getData() {
//         if (!this.cache) {
//             await this.$timeout(() => {
//                 let data = [
//                     { id: 1, name: "Jack", dob: "08/30/1980" },
//                     { id: 2, name: "Eugenia", dob: "10/20/1981" }
//                 ];
// 
//                 this.cache = data;
//             }, 1000);
//         }
//         
//         return this.cache;
//     }

}
