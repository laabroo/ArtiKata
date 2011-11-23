var _ = require('common/util');

_.exports[':keypress'] = function(key) {
    this.textWord.emit('keypress', key);
    this.valueMean.label('Masuk kata Anda!!');
};

_.extend(exports, {
    ':load': function() {
        var view = this;
        console.log('View was loaded');

        view.get('textWord').on('submit', function() {
            console.log(view.get('textWord').value());
            app.message('post_data', {text : view.get('textWord')});
        });

        app.on('message', function(action, data) {
            console.log(action);
            if (action === 'post_data') {
                console.log(data.text);
                view.get('valueMean').label(data.text);
            }
        });
    },

    ':resized': function(width, height) {
        console.log('View was resized to ' + width + 'x' + height);
    },

    ':keydown': function(key) {
        console.log('Key down: ' + key);
    },

    ':keyup': function(key) {
        console.log('Key up: ' + key);
    },

    ':keypress': function(key) {
        console.log('Key press: ' + key);
    },

    ':active': function() {
        console.log('View is active');
    },

    ':inactive': function() {
        console.log('View is inactive');
    }
});
