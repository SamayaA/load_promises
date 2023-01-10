import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((data) => {
  console.log(1, data);
  const obj = JSON.parse(data);
  console.log(2, obj);
}, (error) => {
  console.log(error);
});
