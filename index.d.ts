/**
 * 将日期转换为相对时间格式（如"2小时前"、"明天"等）
 *
 * @param {string|Date|number} date - 目标日期，可以是日期字符串或Date对象
 * @param {Intl.LocalesArgument} [locale='zh-Hans-CN'] - 本地化语言代码，默认为简体中文
 * @returns {string} - 格式化的相对时间字符串
 *
 * @example
 * relativeTime('2024-01-01') // "1年前"
 * relativeTime(new Date(), 'en-US') // "now"
 * relativeTime('2024-12-31', 'zh-Hans-CN') // "明天"
 *
 * 结果会自动选择最合适的单位
 */
declare function relativeTime(date: string | number | Date, locale?: Intl.LocalesArgument): string;

export default relativeTime;
