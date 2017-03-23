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
})
