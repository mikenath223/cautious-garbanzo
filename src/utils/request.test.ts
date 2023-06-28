import { cleanup } from '@testing-library/react';
import { getCityWeather } from './requestData';

describe('request', () => {
  afterEach(cleanup);

  it('getCityWeather should return a response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      }),
    ) as jest.Mock
    await getCityWeather("lagos", false);

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('getCityWeather throw exception', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.reject('API is down'));

    await expect(getCityWeather("", true)).rejects.toThrow();
  });
});
