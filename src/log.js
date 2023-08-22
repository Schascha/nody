const formats = {
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  grey: [90, 39],
  bold: [1, 22],
  underline: [4, 24],
};

const types = {
  complete: {
    badge: '☒',
    color: 'cyan',
    label: 'Complete',
  },
  error: {
    badge: '✘',
    color: 'red',
    label: 'Error',
  },
  info: {
    badge: 'ℹ',
    color: 'blue',
    label: 'Info',
  },
  pending: {
    badge: '☐',
    color: 'magenta',
    label: 'Pending',
  },
  success: {
    badge: '✔',
    color: 'green',
    label: 'Success',
  },
  warning: {
    badge: '⚠',
    color: 'yellow',
    label: 'Warning',
  },
};

class Log {
  constructor() {
    this.labelLength = Object.values(types).reduce(
      (a, { label }) => Math.max(a, label.length),
      0,
    );

    Object.keys(types).forEach((type) => {
      this[type] = this._log.bind(this, type);
    });
  }

  format(format, str) {
    const [start, end] = formats[format] || [];
    return start && end ? `\x1b[${start}m${str}\x1b[${end}m` : str;
  }

  _log(type, ...args) {
    const { format, labelLength } = this;
    const { badge, color, label } = types[type];
    console.log(
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

module.exports = new Log();
