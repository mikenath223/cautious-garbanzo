import { IWeatherInfo } from "../../utils/types";
import Button from "../Button";
import "./index.css";

interface IWeatherDetailsProps {
  city: IWeatherInfo;
  isFavorites: boolean;
  onAddFavorites: () => void;
  onRemoveFavorites: () => void;
}

export default function WeatherDetails({
  city,
  isFavorites = false,
  onAddFavorites,
  onRemoveFavorites,
}: IWeatherDetailsProps) {
  return (
    <section>
      <div className="weather-details">
        <img
          src={city.current.weather_icons?.[0]}
          alt=""
          className="icon-img"
        />
        <h1 className="location-name">{city.location.name}</h1>
        <Button
          className="favorites-btn"
          onClick={() =>
            !isFavorites ? onAddFavorites() : onRemoveFavorites()
          }
        >
          {!isFavorites ? (
            <span>Add to favorites</span>
          ) : (
            <span>Remove from favorites</span>
          )}
          <img
            src={
              !isFavorites
                ? "/assets/icons/unliked.png"
                : "/assets/icons/liked.png"
            }
            alt=""
            className="icon-img"
          />
        </Button>
      </div>
      <div className="country-content flex-center">
        <img src={"/assets/icons/country.png"} alt="" className="icon-img" />
        <span>{city.location.country}</span>
      </div>
      <div className="flex-center">
        <img src={"/assets/icons/state.png"} alt="" className="icon-img" />
        <span>{city.location.region}</span>
      </div>
      <ul className="details-content">
        <li className="details-item card box-shadow">
          <span className="font-20">Observation time</span>
          <span className="font-16">{city.current.observation_time}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Temperature</span>
          <span className="font-16">
            {city.current.temperature}
            <sup>o</sup>C
          </span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Weather description</span>
          <span className="font-16">
            {city.current.weather_descriptions?.[0]}
          </span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Wind speed</span>
          <span className="font-16">{city.current.wind_speed}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Wind degree</span>
          <span className="font-16">{city.current.wind_degree}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Wind direction</span>
          <span className="font-16">{city.current.wind_dir}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Pressure</span>
          <span className="font-16">{city.current.pressure}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Precipitation</span>
          <span className="font-16">{city.current.precip}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Humidity</span>
          <span className="font-16">{city.current.humidity}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Cloud cover</span>
          <span className="font-16">{city.current.cloudcover}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Feels like</span>
          <span className="font-16">{city.current.feelslike}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">UV index</span>
          <span className="font-16">{city.current.uv_index}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Visibility</span>
          <span className="font-16">{city.current.visibility}</span>
        </li>
      </ul>
    </section>
  );
}
