'use strict';

const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'wolverine'});
const Events = require('events');
const EventEmitter = Events.EventEmitter; 
const sonar = new EventEmitter();

function Wolverine () {
  if (!(this instanceof Wolverine)) { 
    return new Wolverine();
  }
  const self = this;
  sonar.on('ready', (a) => log.info(a));

  this.uri = `mongodb://localhost:27017/wolverine`;
  this.db = mongoose.connect(this.uri, function() {
    log.info('Wolverine ready'); 
    log.info(self.db);
    sonar.emit('ready', {
      type: 'system',
      info: 'all systems go'
    });
  });
    
}

module.exports = Wolverine;
