import GameSavingLoader from '../js/GameSavingLoader';

const input = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('test GameSavingLoader', async () => {
  const expected = await JSON.parse(input);
  GameSavingLoader.load().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
  });
});
