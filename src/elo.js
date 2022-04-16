export const getEloChange = (winnerElo, loserElo) => {
  const k = 32;
  const e = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
  return k * (1 - e);
};
