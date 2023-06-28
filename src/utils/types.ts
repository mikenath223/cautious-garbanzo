interface IRequest {
  type: string;
  query: string;
}

interface ILocation {
  name: string;
  country: string;
  region: string;
  localtime: string;
}

interface ICurrent {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
}

export interface IWeatherInfo {
  request: IRequest;
  location: ILocation;
  current: ICurrent;
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
  latitudeData: number;
  longitudeData: number;
  city: string;
  region: string;
  country_name: string;
  country_code: string;
}
