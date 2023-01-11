import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((response) => console.log(response), (error) => console.log(error));
