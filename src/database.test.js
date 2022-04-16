import { updateScoreInDb, getScoreFromDb } from "./database";
import { initializeFirebase } from "./firebase";

// Before running any tests, initialize Firebase
initializeFirebase();

test('Write to database then expect to see that value', () => {
  updateScoreInDb("test", 50).then(() => {
    getScoreFromDb("test").then((snapshot) => {
      expect(snapshot.val()).toBe(50);
    });
  });
});

test('Write invalid value (string) to database then expect the value to remain unchanged', () => {
  getScoreFromDb("test").then((snapshot) => {
    const originalValue = snapshot.val();
    updateScoreInDb("test", "invalid").then(() => {
      getScoreFromDb("test").then((snapshot) => {
        expect(snapshot.val()).toBe(originalValue);
      });
    });
  });
});

test ('Write invalid value (object) to database then expect the value to remain unchanged', () => {
  getScoreFromDb("test").then((snapshot) => {
    const originalValue = snapshot.val();
    updateScoreInDb("test", {}).then(() => {
      getScoreFromDb("test").then((snapshot) => {
        expect(snapshot.val()).toBe(originalValue);
      });
    });
  });
});

test('Write invalid value (negative number) to database then expect the value to remain unchanged', () => {
  getScoreFromDb("test").then((snapshot) => {
    const originalValue = snapshot.val();
    updateScoreInDb("test", -1).then(() => {
      getScoreFromDb("test").then((snapshot) => {
        expect(snapshot.val()).toBe(originalValue);
      });
    });
  });
});

test('Write invalid value (number over 2500) to database then expect the value to remain unchanged', () => {
  getScoreFromDb("test").then((snapshot) => {
    const originalValue = snapshot.val();
    updateScoreInDb("test", 2501).then(() => {
      getScoreFromDb("test").then((snapshot) => {
        expect(snapshot.val()).toBe(originalValue);
      });
    });
  });
});
