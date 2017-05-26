'use strict';

const EventEmitter = require('events');
const config = require('./config');
const mongoose = require('mongoose');

class Wolverine extends EventEmitter {
  constructor(uri) {
    super();
    this.db = mongoose.connect(uri);
    console.log('connected', this.db);
    this.models = this.db.models;
    console.log('this.models: ', this.models);
  }

  find (model, id) {
    this.emit('find', model, id);
    console.log(db[model]);
  }

  create (model) {
    this.emit('create', model);
  }

  read (model) {
    this.emit('read', model);
  }

  update (model, data) {
    this.emit('update', model, data);
  }

  delete (model, data) {
    this.emit('delete', model, data);
  }

  registerModels () {
    return mongoose.models()
  }
}

module.exports = Wolverine
