import { updateScoreInDb, getScoreFromDb } from "./database.js";
import { initializeFirebase, terminateFirebase } from "./firebase.js";

// Before running any tests, initialize Firebase
initializeFirebase();


test('Write to database then expect to see that value', () => {
  updateScoreInDb("test1", 50).then(() => {
    getScoreFromDb("test1").then((snapshot) => {
      expect(snapshot.val()).toBe(50);
    });
  });
});

test('Write invalid value (string) to database then expect the value to remain unchanged', done => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  updateScoreInDb("test2", "invalid").catch(() => {
    expect(console.warn).toHaveBeenCalledTimes(1);
    console.warn.mockRestore();
    done();
  });
});

test('Write invalid value (object) to database then expect the value to remain unchanged', done => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  updateScoreInDb("test3", { hello: "world" }).catch(() => {
    expect(console.warn).toHaveBeenCalledTimes(1);
    console.warn.mockRestore();
    done();
  });
});

test('Write invalid value (negative number) to database then expect the value to remain unchanged', done => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  updateScoreInDb("test4", -1).catch(() => {
    expect(console.warn).toHaveBeenCalledTimes(1);
    console.warn.mockRestore();
    done();
  });
});


test('Write invalid value (number over 2500) to database then expect the value to remain unchanged', done => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  updateScoreInDb("test5", 2501).catch(() => {
    expect(console.warn).toHaveBeenCalledTimes(1);
    console.warn.mockRestore();
    done();
  });
});

afterAll(done => {
  terminateFirebase().then(() => {
    done();
  });
});