import { get, getDatabase, ref, child, set } from "firebase/database";

export const updateScoreInDb = (name, score) => {
  const db = getDatabase();
  return set(ref(db, `/elo/${name}`), score);
};

export const getScoreFromDb = (name) => {
  const db = getDatabase();
  return get(child(ref(db), `/elo/${name}`));
};
