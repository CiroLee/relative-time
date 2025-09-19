import relativeTime from '../index.js';

describe('relativeTime', () => {
  const now = new Date('2025-01-01T12:00:00Z');
  
  // Mock the current time
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(now);
  });
  
  afterEach(() => {
    jest.useRealTimers();
  });

  test('should format seconds correctly', () => {
    const future = new Date(now.getTime() + 30 * 1000); // 30 seconds in the future
    expect(relativeTime(future, 'en')).toBe('in 30 seconds');
    
    const past = new Date(now.getTime() - 30 * 1000); // 30 seconds in the past
    expect(relativeTime(past, 'en')).toBe('30 seconds ago');
  });

  test('should format minutes correctly', () => {
    const future = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes in the future
    expect(relativeTime(future, 'en')).toBe('in 5 minutes');
    
    const past = new Date(now.getTime() - 5 * 60 * 1000); // 5 minutes in the past
    expect(relativeTime(past, 'en')).toBe('5 minutes ago');
  });

  test('should format hours correctly', () => {
    const future = new Date(now.getTime() + 3 * 60 * 60 * 1000); // 3 hours in the future
    expect(relativeTime(future, 'en')).toBe('in 3 hours');
    
    const past = new Date(now.getTime() - 3 * 60 * 60 * 1000); // 3 hours in the past
    expect(relativeTime(past, 'en')).toBe('3 hours ago');
  });

  test('should format days correctly', () => {
    const future = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days in the future
    expect(relativeTime(future, 'en')).toBe('in 2 days');
    
    const past = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000); // 2 days in the past
    expect(relativeTime(past, 'en')).toBe('2 days ago');
  });

  test('should format months correctly', () => {
    const future = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // ~30 days in the future
    expect(relativeTime(future, 'en')).toBe('next month');
    
    const past = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // ~30 days in the past
    expect(relativeTime(past, 'en')).toBe('last month');
  });

  test('should format years correctly', () => {
    const future = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000); // ~365 days in the future
    expect(relativeTime(future, 'en')).toBe('next year');
    
    const past = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000); // ~365 days in the past
    expect(relativeTime(past, 'en')).toBe('last year');
  });

  test('should use default locale (zh-Hans-CN) when none provided', () => {
    const future = new Date(now.getTime() + 30 * 1000); // 30 seconds in the future
    expect(relativeTime(future)).toBe('30秒钟后');
  });

  test('should handle different locales', () => {
    const future = new Date(now.getTime() + 30 * 1000); // 30 seconds in the future
    expect(relativeTime(future, 'zh-Hans-CN')).toBe('30秒钟后');
    expect(relativeTime(future, 'en')).toBe('in 30 seconds');
  });

  test('should handle string date input', () => {
    const future = new Date(now.getTime() + 30 * 1000).toISOString(); // 30 seconds in the future
    expect(relativeTime(future, 'en')).toBe('in 30 seconds');
  });

  test('should handle number date input', () => {
    const future = now.getTime() + 30 * 1000; // 30 seconds in the future
    expect(relativeTime(future, 'en')).toBe('in 30 seconds');
  });

  test('should return "now" for current time', () => {
    expect(relativeTime(now, 'en')).toBe('now');
  });
});