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
    success: { badge: '㋡', color: 'blue', label: 'Yes' },
    star: { badge: '★', color: 'yellow', label: 'Star' },
    like: { badge: '♥', color: 'magenta', label: 'Like' },
  },
});
custom.success('looks good'); // Override default success type
custom.star('+1');
custom.like('love');

// Format
console.log(
  log.format('bold', 'bold'),
  log.format('italic', 'italic'),
  log.format('dim', 'dim'),
  log.format('underline', 'underline'),
  log.format('overline', 'overline'),
  log.format('strikethrough', 'strikethrough'),
  log.format('inverse', 'inverse'),
  log.format('hidden', 'hidden'),
);
console.log(
  log.format('black', 'black'),
  log.format('red', 'red'),
  log.format('green', 'green'),
  log.format('yellow', 'yellow'),
  log.format('blue', 'blue'),
  log.format('magenta', 'magenta'),
  log.format('cyan', 'cyan'),
  log.format('white', 'white'),
  log.format('gray', 'gray'),
);
console.log(
  log.format('bgBlack', 'bgBlack'),
  log.format('bgRed', 'bgRed'),
  log.format('bgGreen', 'bgGreen'),
  log.format('bgYellow', 'bgYellow'),
  log.format('bgBlue', 'bgBlue'),
  log.format('bgMagenta', 'bgMagenta'),
  log.format('bgCyan', 'bgCyan'),
  log.format('bgWhite', 'bgWhite'),
  log.format('bgGray', 'bgGray'),
);
log.error('foo', log.format('red', 'bar'), 'baz');
