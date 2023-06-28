import { IWeatherInfo, PromiseFulfilledResult } from "./types"

export const getCityWeather = async (city: string | null = null, isCheckCache: boolean, lat: string | null = null, lon: string | null = null): Promise<IWeatherInfo> => {
  try {
    const currentDate = new Date()
    const localStorageKey = `${city?.toLowerCase()?.trim() || (lat || "" + lon || "")}-${currentDate.getHours()}-${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
    const cachedCityData = localStorage.getItem(localStorageKey)
    if (cachedCityData && isCheckCache) {
      const weatherData = JSON.parse(cachedCityData)
      return weatherData
    }
    const url = getQueryUrl(city, lat, lon)
    const response = await fetch(url)
    const result = await response.json()
    if (result.error) {
      return result?.error?.info
    }
    localStorage.setItem(localStorageKey, JSON.stringify(result))
    return result
  } catch (error) {
    const errMsg = `Failed to retrieve ${city?.trim()} data!`
    throw new Error(errMsg)
  }
}

const sortCities = (cities: string[]) => cities.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

export const getFavsCityWeather = async (cities: string[]) => {
  const fetchRequests = sortCities(cities).map(city => getCityWeather(city, true));

  try {
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
    return `https://api.openweathermap.org/data/2.5/weather?units=metric${cityQuery}${latQuery}&APPID=3227974f4ec9644ec0f1cae6e61af58b`
  } else if (!lat || !lon) {
    return `https://api.openweathermap.org/data/2.5/weather?units=metric${cityQuery}&APPID=3227974f4ec9644ec0f1cae6e61af58b`
  }
  return `https://api.openweathermap.org/data/2.5/weather?units=metric${latQuery}&APPID=3227974f4ec9644ec0f1cae6e61af58b`
}
