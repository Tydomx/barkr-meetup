//test for date and time on comments
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

  const {format_date} = require('../utils/helpers');

  // to shorten url strings

  test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.instagram.com/beyonce');
    const url3 = format_url('https://www.google.com?q=dogs');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('instagram.com');
    expect(url3).toBe('google.com');
  });

