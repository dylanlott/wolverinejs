'use strict';

const EventEmitter = require('events');

class Wolverine extends EventEmitter {
  constructor() {
    super();
  }

  create (model) {
    this.emit('create', model) 
  }

  read (model) {
    this.emit('read', model)
  }

  update (model, data) {
    this.emit('update', model, data)
  }

  delete (model, data) {
    this.emit('delete', model, data)
  }
}

module.exports = Wolverine
