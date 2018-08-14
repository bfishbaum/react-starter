const express = require('express');
const path = require('path');
const app = express();

// for serving static content that is in webpack compile
app.use(express.static(path.resolve(__dirname + '/../../static/webpack')));

// for serving index.html file
app.use(express.static(__dirname + '/../../static'));

app.post('/getImage', (req, res) => {
    const aom = path.resolve(__dirname + '/../../images/annoyomodule.png');
    console.log(aom);
    res.sendFile(aom);
})


app.listen(8080, () => console.log('Starting Up'));
