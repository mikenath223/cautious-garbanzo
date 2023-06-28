import { useCallback, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { initFavCities } from "../../utils/constants";
import { getFavsCityWeather } from "../../utils/requestData";
import { IWeatherInfo } from "../../utils/types";
import FavCity from "../FavCity";
import sortCitiesData from "../../utils/sortCitiesData";
import "./index.css";

export default function FavCities() {
  const [favCitiesTemp, setFavCitiesTemp] = useLocalStorage<
    IWeatherInfo[] | undefined
  >("favorite-cities", undefined);

  const fetchCities = useCallback(async () => {
    let cities = await getFavsCityWeather(initFavCities);
    setFavCitiesTemp(cities);
  }, [setFavCitiesTemp]);

  useEffect(() => {
    if (!favCitiesTemp) {
      fetchCities();
    }
  }, [fetchCities, favCitiesTemp]);

  const onRemoveCity = (city: IWeatherInfo) => {
    let filteredCities = favCitiesTemp?.filter(
      (cityData) => cityData.location.name !== city.location.name
    );
    if (filteredCities) {
      let sortedCities = sortCitiesData(filteredCities);
      setFavCitiesTemp(sortedCities);
    }
  };

  return (
    <section>
      <ul className="favCities">
        {favCitiesTemp?.map((city: IWeatherInfo) => {
          let key = city.location.name;
          return <FavCity key={key} city={city} onRemoveCity={onRemoveCity} />;
        })}
      </ul>
      {favCitiesTemp?.length === 0 && (
        <h2>No favorite cities in list. Please add favorites.</h2>
      )}
    </section>
  );
}
