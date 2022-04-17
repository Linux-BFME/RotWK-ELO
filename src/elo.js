export const maxElo = 2500;
export const minElo = 0;

/**
 * Calculates the change in ELO for a given score
 * @param {number} winnerElo 
 * @param {number} loserElo 
 * @returns The amount each ELO should change by
 */
export const getEloChange = (winnerElo, loserElo) => {
  const k = 32;
  const e = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
  return k * (1 - e);
};

/**
 * Calculates the new ELO for users after a game
 * @param {number} winnerElo 
 * @param {number} loserElo 
 * @returns Array of new ELOs
 */
export const getNewElo = (winnerElo, loserElo) => {
  if (winnerElo == null) {
    winnerElo = 1200;
  }
  if (loserElo == null) {
    loserElo = 1200;
  }
  const eloChange = getEloChange(winnerElo, loserElo);
  return [Math.min(winnerElo + eloChange, maxElo), Math.max(loserElo - eloChange, minElo)];
};
