// //test for date and time on comments

const {format_date, format_plural,format_url} = require('../utils/helpers');

// Need to check if we still need this
test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.instagram.com/beyonce');
  const url3 = format_url('https://www.google.com?q=dogs');

  expect(url1).toBe('test.com');
  expect(url2).toBe('coolstuff.com');
  expect(url3).toBe('google.com');
});

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('dog', 1);
  const word2 = format_plural('cat', 2);

  expect(word1).toBe('dog');
  expect(word2).toBe('cats');
});

test('format_date() returns a date string', () => {
  const date = new Date('2022-06-29 16:12:03');

  expect(format_date(date)).toBe('6/29/2022');
});

