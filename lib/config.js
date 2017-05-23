'use strict';

module.exports = function Config(env, overrides) {
  if (env === 'production') {
    return {
      uri: process.env.MONGO_URI
    }
  }

  return {
    uri: 'mongodb://localhost:27017/wolverine',
    host: '',
    port: '',
    db: ''
  }
}
