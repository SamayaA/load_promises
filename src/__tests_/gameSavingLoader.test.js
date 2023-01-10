import GameSavingLoader from '../js/GameSavingLoader';

const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('test GameSavingLoader', async () => {
  const data = await GameSavingLoader.load();
  const buffer = new Uint16Array(data);
  let result = '';
  let i = 0;
  while (buffer[i]) {
    result += String.fromCharCode(buffer[i]);
    i++;
  }
  expect(result).toEqual(expected);
});
