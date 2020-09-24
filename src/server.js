const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve(__dirname, 'dist', 'webServices')));
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'webServices', 'index.html'));
});


app.listen(process.env.PORT || 8080);