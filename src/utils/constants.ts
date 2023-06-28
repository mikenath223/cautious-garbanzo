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
  "request": {
    "type": "City",
    "query": "New York, United States of America",
  },
  "location": {
    "name": "New York",
    "country": "United States of America",
    "region": "New York",
    "localtime": "2019-09-07 08:14",
  },
  "current": {
    "observation_time": "12:14 PM",
    "temperature": 13,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Sunny"
    ],
    "wind_speed": 0,
    "wind_degree": 349,
    "wind_dir": "N",
    "pressure": 1010,
    "precip": 0,
    "humidity": 90,
    "cloudcover": 0,
    "feelslike": 13,
    "uv_index": 4,
    "visibility": 16
  }
}

export const defaultNote = {
  id: "01",
  text: "Welcome"
}
