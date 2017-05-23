'use strict';

const EventEmitter = require('events');
const config = require('./config');

class Wolverine extends EventEmitter {
  constructor() {
    super();
    const self = this;
    this.mongoose = require('mongoose');
    this.mongoose.createConnection('mongodb://localhost:27017/wolverine');
    this.db = this.mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function () {
      this.emit('ready', this);
    });
  }

  find (model, id) {
    this.emit('find', model, id);
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
