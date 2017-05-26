'use strict';

const wolverine = require('./index');
const mongoose = require('mongoose');
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'wolverine'});
const service = require('feathers-mongoose');
const express = require('express');
const app = express();
const post = require('./post.js');
const postModel = mongoose.model('Post');
const w = new wolverine('localhost:27017/wolverine');

w.on('create', function(data) {
  log.info('create event fired');
  log.info(data);
});

w.on('ready', function() {
  log.info('wolverineJS is ready');
});

app.get('/', function (req, res) {
  res.send('Wolverines!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

w.create('CREATE');
