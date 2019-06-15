const express = require('express');

const app = new express();
const router = app.Router;



app.listen(3000);



module.exports = {
    app,
    router
};