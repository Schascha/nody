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
  }

  error(str, err) {
    const message = this._message('error', str);
    console.log(err ? new Error(message, { cause: err }) : message);
  }

  info(str) {
    console.log(this._message('info', str));
  }

  warning(str) {
    console.log(this._message('warning', str));
  }

  format(format, str) {
    const [start, end] = formats[format] || [];
    return start && end ? `\x1b[${start}m${str}\x1b[${end}m` : str;
  }

  _message(type, str) {
    const { format, labelLength } = this;
    const { badge, color, label } = types[type];
    return format(
      color,
      [
        badge,
        format('underline', label),
        ''.padStart(labelLength - label.length),
        format('grey', str),
      ].join(' '),
    );
  }
}

module.exports = new Log();
