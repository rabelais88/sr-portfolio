import range from './range';

describe('range', () => {
  it('create array with given number', () => {
    expect(range(3)).toEqual([0, 1, 2]);
  });
  it('create array from a starting number', () => {
    expect(range(2, 1)).toEqual([1, 2]);
  });
  it('create an empty array when no arguments are given', () => {
    expect(range()).toEqual([]);
  });
});
