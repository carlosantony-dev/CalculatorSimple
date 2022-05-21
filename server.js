const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/src/${nomeApp}`));

app.get('/*', (req, res) => {
res.sendFile(__dirname + "src/app/app.component.html");
});

app.listen(process.env.PORT || 8080);