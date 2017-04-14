# WolverineJS

> A realtime event-based  Mongo ODM with Socket.io support out of the box. 

# Basic API

## create

```javascript
w.create({
  model: Example,
  body: {
    //document model
  }
});
```

Emits the `created` event once it has been written to the database. he callback of the created event takes a `data` callback that gives you access to the document that was created.

Emits `error` event if therer were any errors.

## read

### A find many query example:

```javascript
w.get({
  model: Example,
  query: {
  //standard mongoose query params here
  },
  opts: {
    // declare options here
  }
});
```

emits a `data` and `error` event.

### a find one / find by ID example:

```javascript
w.get({
  model: Example,
  id: <mongoId>  
});
```

emits the `data` and `error` events.

## update

```
w.update({
  model: Model,
  body: {
    test: "updated value"
  },
  opts: {
    upsert: true
  }
});
```

emits the `updated` and `error` events.

`updated` event passes through a callback with the previous model's data and the updated version of the model.

## delete

```
// delete by query
w.delete({
  model: Model,
  query: {
    test: "value"
  },
  options: {
    options: true
  }
});

// delete by ID
w.delete({
  model: Model,
  id: _id
});
```

emits the `deleted` and `error` events.

## Events

- All events are tied to a model

e.g. `Model.on('created')`

- Data callbacks have a meta object that give information such as how many documents were touched, how many were modified, how many were created, a timestamp, etc...

## TODO:

- Figure out schemas and model registration on top of mongoose
- Tie in <https://github.com/feathersjs/feathers-rest> for REST API generation
-
