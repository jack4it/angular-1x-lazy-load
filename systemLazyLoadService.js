export class SystemLazyLoadService {

    static $inject = ["$ocLazyLoad"];

    constructor($ocLazyLoad) {
        this.$ocLazyLoad = $ocLazyLoad;
    }

    load(src, moduleExportKey) {
        let loader = this.$ocLazyLoad;
        return System.import(src)
            .then(module => {
                var angularModule = module[moduleExportKey || 'default'];
                if (!angularModule) {
                    console.info(module);
                    throw new Error("Unexpected angular module");
                }
                return loader.load(angularModule);
            })
            .then(() => {
                return null; // !!! critical here; this is needed to trick future state infra
            });
    }

}
