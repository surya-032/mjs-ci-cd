var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "implementasi cicd" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Berhasil Sukses!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
