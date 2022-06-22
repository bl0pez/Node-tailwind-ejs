const express = require('express');
const app = express();

const { viewsPath, publicPath } = require('./src/utils/path');

app.use(express.static(publicPath));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", viewsPath);

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(3000);