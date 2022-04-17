import { get, getDatabase, ref, child, set } from "firebase/database";

/**
 * Add a new score to the database
 * @param {string} name - Player's name
 * @param {number} score - Player's score
 * @returns Promise that resolves when the score is added
 */
export const updateScoreInDb = (name, score) => {
  const db = getDatabase();
  return set(ref(db, `/elo/${name}`), score);
};

/**
 * Return a score from the database
 * @param {string} name - Player's name
 * @returns Promise that resolves to a snapshot of the name's score
 * @example getScoreFromDb("test1").then((snapshot) => {
 *  expect(snapshot.val()).toBe(50);
 * });
 */
export const getScoreFromDb = (name) => {
  const db = getDatabase();
  return get(child(ref(db), `/elo/${name}`));
};

/**
 * Adds multiple scores to the database
 * @param {Object[]} scores - Array of objects with name and score properties
 * @returns Promise that resolves when all scores are added
 * @example updateScoresInDb([{ name: "test1", score: 50 }, { name: "test2", score: 100 }]);
 */
export const updateScoresInDb = (scores) => {
  // Add all the scores, return a promise
  return scores.reduce((promise, score) => {
    return promise.then(() => {
      return updateScoreInDb(score.name, score.score);
    });
  }, Promise.resolve());
};

/**
 * Returns the score for multiple players.
 * @param {string[]} names - array of names to get the scores for
 * @returns Promise that resolves to an array of snapshots of the scores
 * @example getScoresFromDb(["test1", "test2"]).then(snapshots => {
 *   expect(snapshots[0].val()).toBe(50);
 *   expect(snapshots[1].val()).toBe(100);
 * });
 */
export const getScoresFromDb = (names) => {
  // Get all the scores async
  return Promise.all(names.map((name) => {
    return getScoreFromDb(name);
  }));
};