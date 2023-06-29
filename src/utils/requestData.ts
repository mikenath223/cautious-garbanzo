import { IWeatherInfo, PromiseFulfilledResult } from "./types"

export const getCityWeather = async (city: string | null = null, isCheckCache: boolean, lat: string | null = null, lon: string | null = null): Promise<IWeatherInfo> => {
  try {
    const currentDate = new Date()
    const localStorageKey = `${city?.toLowerCase()?.trim() || (lat || "" + lon || "")}
    -${currentDate.getHours()}-${currentDate.getDate()}-${currentDate.getMonth()}
    -${currentDate.getFullYear()}`
    const cachedCityData = localStorage.getItem(localStorageKey)
    if (cachedCityData && isCheckCache) {
      const weatherData = JSON.parse(cachedCityData)
      return weatherData
    }
    const url = getQueryUrl(city, lat, lon)
    const response = await fetch(url)
    const result = await response.json()
    localStorage.setItem(localStorageKey, JSON.stringify(result))
    return result
  } catch (error) {
    console.log(error)
    const errMsg = `Failed to retrieve ${city?.trim()} data!`
    throw new Error(errMsg)
  }
}

const sortCities = (cities: string[]) => cities.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

export const getFavsCityWeather = async (cities: string[]) => {
  try {
    const fetchRequests = sortCities(cities).map(city => getCityWeather(city, true));
    const citiesInfo = await Promise.allSettled(fetchRequests)
    const data = citiesInfo.filter(data => data.status === "fulfilled").map(data => (data as PromiseFulfilledResult<IWeatherInfo>).value)
    return data
  } catch (_) {
    return []
  }
}

const getQueryUrl = (city: string | null, lat: string | null, lon: string | null) => {
  const cityQuery = `&q=${city}`
  const latQuery = `&lat=${lat}&lon=${lon}`
  if (city && lat) {
    return `https://api.openweathermap.org/data/2.5/weather?units=metric${cityQuery}${latQuery}&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  } else if (!lat || !lon) {
    return `https://api.openweathermap.org/data/2.5/weather?units=metric${cityQuery}&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  }
  return `https://api.openweathermap.org/data/2.5/weather?units=metric${latQuery}&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
}
