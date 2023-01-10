import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((data) => {
  const buffer = new Uint16Array(data);
  let result = '';
  let i = 0;
  while (buffer[i]) {
    result += String.fromCharCode(buffer[i]);
    i++;
  }
  console.log(1, result);
}, (error) => {
  console.log(error);
});
