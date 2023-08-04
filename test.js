const log = require('./src/log');

log.error('foo');
log.error('foo', { foo: 'bar' });
log.warning('bar');
log.info('baz');
