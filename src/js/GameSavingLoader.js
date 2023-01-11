import read from './parser';
import json from './reader';

class GameSaving {
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {
      id: data.userInfo.id,
      name: data.userInfo.name,
      level: data.userInfo.level,
      points: data.userInfo.points,
    };
  }
}

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => (json(response)))
      .then((response) => {
        const buffer = new Uint16Array(response);
        let result = '';
        let i = 0;
        while (buffer[i]) {
          result += String.fromCharCode(buffer[i]);
          i++;
        }
        // console.log('GameSaving object', JSON.parse(result));
        return new GameSaving(JSON.parse(result));
      });
  }
}
