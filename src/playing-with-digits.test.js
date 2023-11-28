const playingWithDigits = require('./playing-with-digits');

describe('User Story 1: p = 1', () => {
  it('UAT1.1: When I pass (1, 1), then I should see 1', () => {
    expect(playingWithDigits(1, 1)).toBe(1);
  });
  it('UAT2.1: When I pass (2, 1), then I should see 1', () => {
    expect(playingWithDigits(2, 1)).toBe(1);
  });
  it('UAT1.3: When I pass (3, 1), then I should see 1', () => {
    expect(playingWithDigits(3, 1)).toBe(1);
  });
  it('UAT1.4: When I pass (9, 1), then I should see 1', () => {
    expect(playingWithDigits(9, 1)).toBe(1);
  });
  it('UAT1.5: When I pass (10, 1), then I should see -1', () => {
    expect(playingWithDigits(10, 1)).toBe(-1);
  });
  it('UAT1.6: When I pass (15, 1), then I should see -1', () => {
    expect(playingWithDigits(15, 1)).toBe(-1);
  });
});
