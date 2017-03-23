'use strict';

const wolverine = require('./index');
const mongoose = require('mongoose');
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'wolverine'});
const service = require('feathers-mongoose');
const express = require('express');
const app = express();

//declare test model
const post = require('./post.js');

//start wolverine 
const w = wolverine();

log.info(w);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
