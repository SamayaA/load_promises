import GameSavingLoader from '../js/GameSavingLoader';

const expected = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
};

test('test GameSavingLoader', async () => GameSavingLoader.load().then((response) => {
  expect(response).toEqual(expected);
}));
