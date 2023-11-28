const playingWithDigits = require('./playing-with-digits');

describe('User Story 1: p = 1', () => {
  it('UAT1.1: When I pass (1, 1), then I should see 1', () => {
    expect(playingWithDigits(1, 1)).toBe(1);
  });
  it('UAT2.1: When I pass (2, 1), then I should see 1', () => {
    expect(playingWithDigits(2, 1)).toBe(1);
  });
});
