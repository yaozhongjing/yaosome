var fallback = require('express-history-api-fallback');
var express = require('express');
var app = express();
var root = __dirname + '/public';
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});