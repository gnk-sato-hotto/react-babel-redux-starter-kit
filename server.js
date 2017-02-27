const path    = require('path');
const express = require('express');

const port = 8897;
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
