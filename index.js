var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Helo Dunia kita" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "implementasi cicd" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Thank you!" }');
});

app.listen(process.env.PORT || 3030);
module.exports = app;
