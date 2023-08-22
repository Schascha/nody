const log = require('./src/log');

log.error('foo');
log.error('foo', { foo: 'bar' });
log.error(new Error('foo', { cause: 'bar' }));
log.warning(5);
log.warning('bar');
log.warning('foo', 'bar', 'baz');
log.info('baz');
log.pending('baz');
log.complete('baz');
