const formats = require('./formats');
const types = require('./types');

class Log {
  constructor(options = {}) {
    this.stream = options.stream || console.log;
    this.types = Object.assign({}, types, options.types);
    this.labelLength = Object.values(this.types).reduce(
      (a, { label }) => Math.max(a, label.length),
      0,
    );

    Object.keys(this.types).forEach((type) => {
      this[type] = this._log.bind(this, type);
    });
  }

  format(format, str) {
    const [start, end] = formats[format] || [];
    return start && end ? `\x1b[${start}m${str}\x1b[${end}m` : str;
  }

  _log(type, ...args) {
    const { format, labelLength, stream, types } = this;
    const { badge, color, label } = types[type];
    stream(
      format(
        color,
        [
          badge,
          format('underline', label),
          ''.padStart(labelLength - label.length),
        ].join(' '),
      ),
      ...args.map((arg) =>
        arg instanceof Error || typeof arg === 'object'
          ? arg
          : format('grey', arg),
      ),
    );
  }
}

module.exports = Object.assign(new Log(), { Log });
