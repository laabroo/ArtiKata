// ArtiKata -- backend.js
var http = require('blaast/simple-http');
var QS = require('querystring');

log.info('Hello from backend bootstrap.');

app.message(function(client, action, data) {
    console.log(action);
    console.log(data.text);

    if (action === 'post_data') {
        var param = "format=json&phrase=" + data.text;
        var url = "http://kateglo.bahtera.org/api.php?" + param;

        http.get(url, {type : 'binary' }, {
            ok : function(data) {
                console.log(data);
                data = JSON.parse(data);
                client.msg('post_data', { text : data.data.translations[0].translatedText});
            },
            error : function(err) {
                console.log(err);
            }
        });
    }
});
