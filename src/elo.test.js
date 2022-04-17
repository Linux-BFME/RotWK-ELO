import {getEloChange, getNewElo, maxElo} from './elo';

test('ELO cannot change by more than 32', () => {
  expect(getEloChange(50, 2500)).toBeLessThanOrEqual(32);
});

test('ELO change for same score is 16', () => {
  expect(getEloChange(50, 50)).toBe(16);
});

test('Updated ELO is correct', () => {
  expect(getNewElo(50, 50)).toEqual([66, 34]);
  expect(getNewElo(1200, 1200)).toEqual([1216, 1184]);
  const [winnerElo] = getNewElo(2500, 2500);
  expect(winnerElo).toBe(maxElo);
});
