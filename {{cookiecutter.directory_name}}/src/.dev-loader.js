var moduleName = '{{cookiecutter.name}}';
window[moduleName] = (function() {
    "use strict";

    var d0 = new Date().getTime();
    var moduleProxy;


    var p = new Promise( function (resolve) {
        EgisUI.loaded(function() {
            console.log('Loading ' + moduleName + ' plugin with SystemJS..', EgisUI.currentTimeWithMillisString());
            var map = {};
            map[moduleName] = 'http://HOST:PORT/dist/main/dev-index';
            System.config({
                defaultJSExtensions: true,
                map: map
            });

            System.import(moduleName).then(function(m) {
                _.forEach(m, function(value, key) {
                    moduleProxy[key] = value;
                });
                console.log(moduleName + ' plugin loaded in', new Date().getTime() - d0, EgisUI.currentTimeWithMillisString());
                resolve(m);
            });
        });
    });

    var moduleProxy = {
        loaded: function(callback) {
            p.then(function(m) {
                m.loaded(callback);
            })
        }
    };

    return moduleProxy;
})();