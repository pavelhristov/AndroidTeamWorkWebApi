'use strict';

const express = require('express');
const bodyParser = require('body-parser');

module.exports = function() {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    return app;
};