interface ICoord {
  lon: number;
  lat: number;
}

interface IWeather {
  main: string;
  description: string;
  icon: string;
}

interface IMainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface IWindWeather {
  speed: number;
  deg: number;
  gust: number;
}

interface ISysWeather {
  country: string;
}

export interface IWeatherInfo {
  coord: ICoord;
  weather: IWeather[];
  main: IMainWeather;
  visibility: number;
  wind: IWindWeather;
  sys: ISysWeather;
  name: string;
}

export interface PromiseFulfilledResult<T> {
  status: "fulfilled";
  value: T;
}

interface PromiseRejectedResult {
  status: "rejected";
  reason: any;
}

export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;

export interface IResult {
  status: "fulfilled" | "rejected";
  value: IWeatherInfo
}

export interface IFavCitiesTemp {
  name: string | undefined,
  temperature: number | undefined,
}

export interface INote {
  id: string;
  text: string
}

export interface IPResponse {
  latitude: number;
  longitude: number;
  city: string;
  region: string;
  country_name: string;
  country_code: string;
}
