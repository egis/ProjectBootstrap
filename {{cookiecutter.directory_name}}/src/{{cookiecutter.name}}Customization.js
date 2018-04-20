export default class {{cookiecutter.name}}Customization {
    constructor() {
        this.initRouter();
        this.initMenu();
        this.initToolbar();
        this.initActions();
        this.initViews();
        this.defaultRoute();
    }

    initRouter() {
    }

    initViews() {
    }

    defaultRoute() {
    }

    initToolbar() {
    }

    initActions() {
    }

    initMenu() {
    }
}

UI.plugin(() => {
    console.log('Loading {{cookiecutter.name}} plugin @@version @@timestamp');

    window.customization = new {{cookiecutter.name}}Customization();
});
