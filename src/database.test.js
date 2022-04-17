import {
  getScoreFromDb,
  getScoresFromDb,
  updateScoreInDb,
  updateScoresInDb,
} from './database.js';
import {initializeFirebase, terminateFirebase} from './firebase.js';
import {maxElo, minElo} from './elo';

// Before running any tests, initialize Firebase
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  initializeFirebase();
  expect(console.log).toHaveBeenCalledTimes(1);
  console.log.mockRestore();
});

test('Write to database then expect to see that value', () => {
  updateScoreInDb('test1', 50).then(() => {
    getScoreFromDb('test1').then((snapshot) => {
      expect(snapshot.val()).toBe(50);
    });
  });
});

test(
    'Write invalid value (string) to database ' +
    'then expect the value to remain unchanged',
    (done) => {
      jest.spyOn(console, 'warn').mockImplementation(() => {});
      updateScoreInDb('test2', 'invalid').catch(() => {
        expect(console.warn).toHaveBeenCalledTimes(1);
        console.warn.mockRestore();
        done();
      });
    },
);

test(
    'Write invalid value (object) to database ' +
    'then expect the value to remain unchanged',
    (done) => {
      jest.spyOn(console, 'warn').mockImplementation(() => {});
      updateScoreInDb('test3', {hello: 'world'}).catch(() => {
        expect(console.warn).toHaveBeenCalledTimes(1);
        console.warn.mockRestore();
        done();
      });
    },
);

test(
    'Write invalid value (number below minElo) to database ' +
    'then expect the value to remain unchanged',
    (done) => {
      jest.spyOn(console, 'warn').mockImplementation(() => {});
      updateScoreInDb('test4', minElo - 1).catch(() => {
        expect(console.warn).toHaveBeenCalledTimes(1);
        console.warn.mockRestore();
        done();
      });
    },
);

test(
    'Write invalid value (number over maxElo) to database ' +
    'then expect the value to remain unchanged',
    (done) => {
      jest.spyOn(console, 'warn').mockImplementation(() => {});
      updateScoreInDb('test5', maxElo + 1).catch(() => {
        expect(console.warn).toHaveBeenCalledTimes(1);
        console.warn.mockRestore();
        done();
      });
    },
);

test(
    'Write multiple values to database with updateScoresInDb ' +
    'then expect to see those values with getScoresFromDb',
    (done) => {
      updateScoresInDb([
        {name: 'test6', score: 50},
        {name: 'test7', score: 100},
      ]).then(() => {
        getScoresFromDb(['test6', 'test7']).then((snapshots) => {
          expect(snapshots[0].val()).toBe(50);
          expect(snapshots[1].val()).toBe(100);
          done();
        });
      });
    },
);

afterAll((done) => {
  terminateFirebase().then(() => {
    done();
  });
});
