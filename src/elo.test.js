import { getEloChange } from "./elo";

test('ELO cannot change by more than 32', () => {
  expect(getEloChange(50, 2500)).toBeLessThanOrEqual(32);
});

test('ELO change for same score is 16', () => {
  expect(getEloChange(50, 50)).toBe(16);
});
