# relative-time

一个简单的库，用于将日期格式化为相对于当前时间的相对时间字符串。

## 功能

- 支持多种语言环境
- 使用 Intl.RelativeTimeFormat 实现
- 自动缓存 RelativeTimeFormat 实例以提高性能
- 支持传入字符串、数字或 Date 对象作为日期参数

## 安装

```bash
npm install @cirolee/relative-time
```

## 使用

```javascript
import relativeTime from '@cirolee/relative-time';

// 基本使用
console.log(relativeTime('2025-09-20')); // "1天后"
console.log(relativeTime('2025-09-18')); // "1天前"
console.log(relativeTime(new Date())); // "现在"

// 指定语言环境
console.log(relativeTime('2025-09-20', 'en-US')); // "in 1 day"
console.log(relativeTime('2025-09-18', 'en-US')); // "1 day ago"
```

## API

### `relativeTime(date, locale?)`

将给定日期格式化为相对于当前时间的相对时间字符串。

#### 参数

- `date` (string | number | Date): 要格式化的日期
- `locale` (Intl.LocalesArgument, 可选): 语言环境，默认为 'zh-Hans-CN'

#### 返回值

(string): 格式化后的相对时间字符串

## 许可证

[MIT](/LICENSE)