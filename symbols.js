
const ansiEscapes = require('ansi-escapes')
module.exports = (symbol) => {
  const weatherIcons = {
    // Clear
    'c': [
      '\x1B[38;5;226m    \\   /    \x1B[0m',
      '\x1B[38;5;226m     .-.     \x1B[0m',
      '\x1B[38;5;226m  ‒ (   ) ‒  \x1B[0m',
      '\x1B[38;5;226m     `-᾿     \x1B[0m',
      '\x1B[38;5;226m    /   \\    \x1B[0m'
    ],
    // Light cloud
    'lc': [
      '\x1B[38;5;226m   \\  /\x1B[0m      ',
      '\x1B[38;5;226m _ /\'\'\x1B[38;5;250m.-.    \x1B[0m',
      '\x1B[38;5;226m   \\_\x1B[38;5;250m(   ).  \x1B[0m',
      '\x1B[38;5;226m   /\x1B[38;5;250m(___(__) \x1B[0m',
      '             '
    ],
    // Heavy cloud
    'hc': [
      '             ',
      '\x1B[38;5;250m     .--.    \x1B[0m',
      '\x1B[38;5;250m  .-(    ).  \x1B[0m',
      '\x1B[38;5;250m (___.__)__) \x1B[0m',
      '             '
    ],
    // Showers
    's': [
      '\x1B[38;5;226m _`/\'\'\x1B[38;5;250m.-.    \x1B[0m',
      '\x1B[38;5;226m  ,\\_\x1B[38;5;250m(   ).  \x1B[0m',
      '\x1B[38;5;226m   /\x1B[38;5;250m(___(__) \x1B[0m',
      '\x1B[38;5;111m     ʻ ʻ ʻ ʻ \x1B[0m',
      '\x1B[38;5;111m    ʻ ʻ ʻ ʻ  \x1B[0m'
    ],
    // Light rain
    'lr': [
      '\x1B[38;5;250m     .-.     \x1B[0m',
      '\x1B[38;5;250m    (   ).   \x1B[0m',
      '\x1B[38;5;250m   (___(__)  \x1B[0m',
      '\x1B[38;5;111m    ʻ ʻ ʻ ʻ  \x1B[0m',
      '\x1B[38;5;111m   ʻ ʻ ʻ ʻ   \x1B[0m'
    ],
    // Heavy rain
    'hr': [
      '\x1B[38;5;240;1m     .-.     \x1B[0m',
      '\x1B[38;5;240;1m    (   ).   \x1B[0m',
      '\x1B[38;5;240;1m   (___(__)  \x1B[0m',
      '\x1B[38;5;21;1m  ‚ʻ‚ʻ‚ʻ‚ʻ   \x1B[0m',
      '\x1B[38;5;21;1m  ‚ʻ‚ʻ‚ʻ‚ʻ   \x1B[0m'
    ],
    // Thunderstorm
    't': [
      '\x1B[38;5;240;1m     .-.     \x1B[0m',
      '\x1B[38;5;240;1m    (   ).   \x1B[0m',
      '\x1B[38;5;240;1m   (___(__)  \x1B[0m',
      '\x1B[38;5;21;1m  ‚ʻ\x1B[38;5;228;5m⚡\x1B[38;5;21;25mʻ‚\x1B[38;5;228;5m⚡\x1B[38;5;21;25m‚ʻ   \x1B[0m',
      '\x1B[38;5;21;1m  ‚ʻ‚ʻ\x1B[38;5;228;5m⚡\x1B[38;5;21;25mʻ‚ʻ   \x1B[0m'
    ],
    // Hail
    'h': [
      '\x1B[38;5;250m     .-.     \x1B[0m',
      '\x1B[38;5;250m    (   ).   \x1B[0m',
      '\x1B[38;5;250m   (___(__)  \x1B[0m',
      '\x1B[38;5;111m    ʻ \x1B[38;5;255m*\x1B[38;5;111m ʻ \x1B[38;5;255m*  \x1B[0m',
      '\x1B[38;5;255m   *\x1B[38;5;111m ʻ \x1B[38;5;255m*\x1B[38;5;111m ʻ   \x1B[0m'
    ],
    // Sleet
    'sl': [
      '\x1B[38;5;250m     .-.     \x1B[0m',
      '\x1B[38;5;250m    (   ).   \x1B[0m',
      '\x1B[38;5;250m   (___(__)  \x1B[0m',
      '\x1B[38;5;255m    *  *  *  \x1B[0m',
      '\x1B[38;5;255m   *  *  *   \x1B[0m'
    ],
    // (You know nothing, Jon) Snow
    'sn': [
      '\x1B[38;5;240;1m     .-.     \x1B[0m',
      '\x1B[38;5;240;1m    (   ).   \x1B[0m',
      '\x1B[38;5;240;1m   (___(__)  \x1B[0m',
      '\x1B[38;5;255;1m   * * * *   \x1B[0m',
      '\x1B[38;5;255;1m  * * * *    \x1B[0m'
    ]
  }
  return weatherIcons[symbol].join(ansiEscapes.cursorMove(-13, 1))
}
