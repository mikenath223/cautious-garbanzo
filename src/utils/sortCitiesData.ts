import { IWeatherInfo } from "./types";

const sortCitiesData = (cities: IWeatherInfo[] | undefined) => cities?.sort((a, b) => a.location.name.toLowerCase().localeCompare(b.location.name.toLowerCase()))

export default sortCitiesData
