import { IWeatherInfo } from "./types";

const sortCitiesData = (cities: IWeatherInfo[] | undefined) => cities?.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

export default sortCitiesData
