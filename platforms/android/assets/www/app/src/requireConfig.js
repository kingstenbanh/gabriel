/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous/src',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        ionicons: '../lib/ionicons/fonts/*'
    },
    packages: [

    ]
});
require(['main']);
