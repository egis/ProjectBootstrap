window.showDefaultPage = !location.hash || location.hash === '#'; // a flag in case the plugin needs to show some special page by default

let loaded = (callback) => {
    callback();
};

export {
    loaded
};

//pick the files code
import './{{cookiecutter.name}}Customization';
