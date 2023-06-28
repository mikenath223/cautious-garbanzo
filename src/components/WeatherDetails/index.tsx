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
        <h1 className="location-name">{city.name}</h1>
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
        <span>{city.sys.country}</span>
      </div>
      <ul className="details-content">
        <li className="details-item card box-shadow">
          <span className="font-20">Temperature</span>
          <span className="font-16">
            {city.main.temp}
            <sup>o</sup>C
          </span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Weather description</span>
          <span className="font-16">{city.weather?.[0]?.description}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Wind speed</span>
          <span className="font-16">{city.wind.speed}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Wind degree</span>
          <span className="font-16">{city.wind.deg}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Pressure</span>
          <span className="font-16">{city.main.pressure}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Humidity</span>
          <span className="font-16">{city.main.humidity}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Feels like</span>
          <span className="font-16">{city.main.feels_like}</span>
        </li>
        <li className="details-item card box-shadow">
          <span className="font-20">Visibility</span>
          <span className="font-16">{city.visibility}</span>
        </li>
      </ul>
    </section>
  );
}
