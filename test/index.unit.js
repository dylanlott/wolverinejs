var test = require('tape');
var Wolverine = require('..');

test('smoke test', (t) => {
  t.ok(Wolverine);
  t.end();
});

test('@constructor', (t) => {
  var w = new Wolverine();
  t.ok(w);
  t.ok(w instanceof Wolverine);
  t.ok(w.models);
  t.ok(w.db);
  t.ok(w.events);
  t.end();
});

test('#find', (t) => {
  var w = new Wolverine();
  t.ok(w);

  t.test('Should find all', (t) => {
    w.find('Message', {}, function(data) {
      t.ok(data);
      t.end();
    });
  });

  t.test('Should find with query params', (t) => {
    const query = {
      body: 'test body'
    }
    w.find('Message', query, function(data) {
      t.ok(data);
      t.end();
    });
  });
});
