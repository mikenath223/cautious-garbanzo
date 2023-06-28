import { IWeatherInfo, PromiseFulfilledResult } from "./types"

export const getCityWeather = async (city: string, isCheckCache: boolean): Promise<IWeatherInfo> => {
  try {
    const currentDate = new Date()
    const localStorageKey = `${city.toLowerCase().trim()}-${currentDate.getHours()}-${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
    const cachedCityData = localStorage.getItem(localStorageKey)
    if (cachedCityData && isCheckCache) {
      const weatherData = JSON.parse(cachedCityData)
      return weatherData
    }
    const url = `http://api.weatherstack.com/current?access_key=04c73e2c81cd37fd215de627927cdd44&query=${city}`;
    const response = await fetch(url)
    const result = await response.json()
    if (result.error) {
      return result?.error?.info
    }
    localStorage.setItem(localStorageKey, JSON.stringify(result))
    return result
  } catch (error) {
    const errMsg = `Failed to retrieve ${city.trim()} data!`
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