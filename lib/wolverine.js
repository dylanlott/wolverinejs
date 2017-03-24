'use strict';

const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'wolverine'});
const Events = require('events');
const EventEmitter = Events.EventEmitter; 
const sonar = new EventEmitter();
const util = require('util');

function Wolverine () {
  if (!(this instanceof Wolverine)) { 
    return new Wolverine();
  }
  const self = this;
  self.sonar = new EventEmitter();
  self.uri = `mongodb://localhost:27017/wolverine`;
  self.db = mongoose.connect(this.uri, function() {
    log.info('Wolverine ready'); 
    //log.info(self.db);
    
    sonar.emit('ready', {
      type: 'system',
      info: 'all systems go'
    });

    self.models = mongoose.modelNames();
    self.mongoose = self.db.connections[0];
    self.schema = self.db.connections[0].base.Mongoose.modelSchemas;

  });
}

util.inherits(Wolverine, EventEmitter);

Wolverine.prototype.find = function(Model, query, cb) {
  if (!cb) {
    cb = null;
  }
  const _model = mongoose.model(Model);
  log.info('MODEL IS: ', _model); 
  return _model;
}

Wolverine.prototype.create = function() {

}

Wolverine.prototype.update = function() {

}

Wolverine.prototype.remove = function() {

}

Wolverine.prototype.emit = function() {

}

Wolverine.prototype.listen = function(event, data) {
 
}

Wolverine.version = '0.0.1';
Wolverine.creator = 'Dylan Lott'; 

Wolverine.prototype.getModels = function() {
  return this.models;
}

module.exports = Wolverine;
