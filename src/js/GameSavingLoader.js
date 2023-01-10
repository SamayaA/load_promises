import read from './parser';
import json from './reader';

export default class GameSavingLoader {
  static load() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        read()
          .then((buffer) => {
            json(buffer)
              .then((data) => {
                resolve(data);
              });
          })
          .catch((error) => {
            reject(error);
          });
      });
    }, 0);
  }
}
