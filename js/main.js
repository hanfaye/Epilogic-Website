/* Author:

*/

EPILOGIC = {
    common: {
        init: function() {
            $('#slider').nivoSlider();
        }
    }
}

UTIL = {
    exec: function (controller, action) {
        var ns = EPILOGIC,
            action = action || 'init';

        if (controller !== '' && ns[controller] &&
            typeof ns[controller][action] === 'function') {
          
            ns[controller][action]();
        }
    },

    init: function () {
        var body = document.body,
            controller = body.getAttribute('data-controller');
            action = body.getAttribute('data-action');

        UTIL.exec('common');
        UTIL.exec(controller);

        if (action) {
            // Don't call init twice because there's no data-action attribute
            // on the body.
            UTIL.exec(controller, action);
        }
    },
}

$(document).ready(UTIL.init);
