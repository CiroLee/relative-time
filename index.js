const rtlCache = new Map();
function getRtlInstance(locale) {
  if (!rtlCache.has(locale)) {
    rtlCache.set(locale, new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }));
  }
  return rtlCache.get(locale);
}

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
