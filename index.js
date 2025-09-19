const rtlCache = new Map();
function getRtlInstance(locale) {
  if (!rtlCache.has(locale)) {
    rtlCache.set(locale, new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }));
  }
  return rtlCache.get(locale);
}

/**
 * 将日期转换为相对时间格式（如"2小时前"、"明天"等）
 * 
 * @param {string|Date} date - 目标日期，可以是日期字符串或Date对象
 * @param {string} [locale='zh-Hans-CN'] - 本地化语言代码，默认为简体中文
 * @returns {string} - 格式化的相对时间字符串
 * 
 * @example
 * relativeTime('2024-01-01') // "1年前"
 * relativeTime(new Date(), 'en-US') // "now"
 * relativeTime('2024-12-31', 'zh-Hans-CN') // "明天"
 * 
 * 结果会自动选择最合适的单位
 */
export default function relativeTime(date, locale = 'zh-Hans-CN') {
  const rtf = getRtlInstance(locale);

  const targetDate = new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);

  const units = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1],
  ];

  for (const [unit, secondsInUnit] of units) {
    const interval = Math.floor(Math.abs(diffInSeconds) / secondsInUnit);
    if (interval >= 1) {
      const relativeValue = diffInSeconds > 0 ? interval : -interval;
      return rtf.format(relativeValue, unit);
    }
  }

  return rtf.format(0, 'second');
}
