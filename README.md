What this project is for?
=========================

A solution of lazy loading [Angular 1.x](https://angularjs.org/) modules using a mix of various technologies/tooling, including [systemjs](https://github.com/systemjs/systemjs), [ocLazyLoad](https://oclazyload.readme.io/), [ui-router](https://github.com/angular-ui/ui-router), [ui-router-extras](https://github.com/christopherthielen/ui-router-extras) [future state](http://christopherthielen.github.io/ui-router-extras/#/future) and not-required-but-great-to-have [ES6/ES2015](https://babeljs.io/docs/learn-es2015/).

This demo project accompanies this blog post of mine http://jackma.com/2015/12/30/a-lazy-loading-solution-for-angular-1-x/.

Usage
=====

Clone this repository:

```git clone httpshttps://github.com/jack4it/angular-1x-lazy-load```

Install all npm packages:

```npm install --no-optional```

Install all jspm packages:

```jspm install```

Run the bundle script (this is to be used in index.html):

```node bundle.js```

Finally launch browser-sync and browse to the examples to see the results:

```gulp serve```

Examples
========

This demo project defines in total three Angular 1.x modules. The *app* module as the initial loaded main app module and the other two lazy-loaded modules, namely *contact* and *about*, in their own folders

**app.js**: The main entry point of the app where systemjs/ocLazyLoad/future state are wired up. In other words, the lazy-loaded modules (future states) are declared here

**systemLazyLoadService.js**: The key of connecting systemjs and ocLazyLoad. This is registered as an Angular service and ```$futureStateProvider.stateFactory```.

**index-debug.html**: An example of how to lazy load Angular 1.x modules in *browser* on the fly during development time

**bundle.js**: A script example of how to generate the corresponding bundles based on the declared future states in *node* during build time for production

**index.html**: An example of how to lazy load the bundled modules in production environment

License
=======

MIT
