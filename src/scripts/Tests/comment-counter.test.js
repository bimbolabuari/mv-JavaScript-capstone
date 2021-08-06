/**
 * @jest-environment jsdom
 */
import newCounter from '../UX/counter';

describe('check if counter is equal to comment API data length', () => {
  test('commentNumber should return the size of an API comment data', () => {
    const commentData = [
      {
        creation_date: '2011-10-21',
        username: 'Jane',
        comment: 'Foo',

      },
      {
        creation_date: '2011-10-21',
        username: 'Jane',
        comment: 'Foo',

      },
    ];

    const testResult = newCounter.counter(commentData);
    expect(testResult).toBe(2);
  });
});