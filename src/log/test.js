const log = require('./log');
const { Log } = require('./log');

// Default types
log.error('foo');
log.error('foo', { bar: 'baz' });
log.error(new Error('foo', { cause: 'bar' }));
log.warning('bar');
log.warning(0, 1, null, undefined);
log.warning('foo', 'bar', 'baz');
log.success('foo');
log.info('foo');
log.pending('bar');
log.complete('baz');

// Custom types
custom = new Log({
  types: {
    star: { badge: '★', color: 'yellow', label: 'Star' },
    like: { badge: '♥', color: 'magenta', label: 'Like' },
  },
});
custom.star('+1');
custom.like('love');

// Format
console.log(
  log.format('red', 'foo'),
  log.format('blue', 'bar'),
  log.format('underline', 'baz'),
);
log.error('foo', log.format('red', 'bar'), 'baz');
