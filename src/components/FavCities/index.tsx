import { useCallback, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { initFavCities } from "../../utils/constants";
import { getFavsCityWeather } from "../../utils/requestData";
import { IWeatherInfo } from "../../utils/types";
import FavCity from "../FavCity";
import sortCitiesData from "../../utils/sortCitiesData";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

export default function FavCities() {
  const [favCitiesTemp, setFavCitiesTemp] = useLocalStorage<
    IWeatherInfo[] | undefined
  >("favorite-cities", undefined);

  const fetchCities = useCallback(async () => {
    try {
      let cities = await getFavsCityWeather(initFavCities);
      setFavCitiesTemp(cities);
    } catch (error) {}
  }, [setFavCitiesTemp]);

  const isFavoritesExist = favCitiesTemp?.[0]?.name;
  useEffect(() => {
    if (!isFavoritesExist) {
      fetchCities();
    }
  }, [fetchCities, isFavoritesExist]);

  const onRemoveCity = (city: IWeatherInfo) => {
    let filteredCities = favCitiesTemp?.filter(
      (cityData) => cityData.name !== city.name
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
          let key = city.name || uuidv4();
          return <FavCity key={key} city={city} onRemoveCity={onRemoveCity} />;
        })}
      </ul>
      {favCitiesTemp?.length === 0 && (
        <h2 className="text-center">
          No favorite cities in list. Please add favorites.
        </h2>
      )}
    </section>
  );
}
