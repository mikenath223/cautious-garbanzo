import { IWeatherInfo } from "./types"

export const initFavCities: string[] = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "Dhaka",
  "Sao Paulo",
  "Mexico City",
  "Cairo",
  "Beijing",
  "Mumbai",
  "Osaka",
  "Chongqing",
  "Karachi",
  "Kinshasa",
  "Lagos",
  "Istanbul"
]

export const defaultCity: IWeatherInfo = {
  coord:
    { lon: 3.75, lat: 6.5833 },
  weather: [{ main: "Rain", description: "light rain", icon: "10n" }],
  main: {
    temp: 25.18, feels_like: 26.26, temp_min: 25.18, temp_max: 25.18, pressure: 1015, humidity: 96,
    sea_level: 1015, grnd_level: 1015
  },
  visibility: 10000,
  wind: { speed: 1.44, deg: 225, gust: 2.57 },
  sys: { country: "NG" },
  name: "Lagos"
}

export const defaultNote = {
  id: "01",
  text: "Welcome"
}
