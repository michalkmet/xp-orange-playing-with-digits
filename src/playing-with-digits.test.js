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
  it('UAT1.7: When I pass (33, 1), then I should see -1', () => {
    expect(playingWithDigits(33, 1)).toBe(-1);
  });
  it('UAT1.8: When I pass (89, 1), then I should see 1', () => {
    expect(playingWithDigits(89, 1)).toBe(1);
  });
  it('UAT1.9: When I pass (92, 1), then I should see -1', () => {
    expect(playingWithDigits(92, 1)).toBe(-1);
  });
  it('UAT1.10: When I pass (111, 1), then I should see -1', () => {
    expect(playingWithDigits(111, 1)).toBe(-1);
  });
});

describe('User Story 2: p = 2', () => {
  it('UAT2.1: When I pass (695, 2), then I should see 2', () => {
    expect(playingWithDigits(695, 2)).toBe(2);
  });
});
