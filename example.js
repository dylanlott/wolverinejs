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

const models = mongoose.modelNames();
const _post = w.find('Post');
console.log('_post: ', _post);

//gain access to models
console.log('MODELS: ', w.db.connections[0].base.models);

//case sensitive access to model 
const postModel = mongoose.model('Post');

console.log('POST: ', postModel);
console.log('MODELS: ', models);


app.get('/', function (req, res) {
    res.send('Wolverines!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
