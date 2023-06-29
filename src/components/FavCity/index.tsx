import { Link } from "react-router-dom";
import { IWeatherInfo } from "../../utils/types";
import Button from "../Button";
import "./index.css";

interface IFavCityProps {
  city: IWeatherInfo;
  onRemoveCity: (city: IWeatherInfo) => void;
}

export default function FavCity({ onRemoveCity, city }: IFavCityProps) {
  const handleRemoveCity = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    event.preventDefault();
    onRemoveCity(city);
  };

  const onSelectCity = () => {
    localStorage.setItem("selected-city", JSON.stringify(city));
  };

  return (
    <li onClick={() => onSelectCity()}>
      <Link to={"/details"} className="card box-shadow" tabIndex={0}>
        <Button
          className="remove-btn"
          type={"button"}
          tabIndex={0}
          aria-label={"Delete favorite city"}
          onClick={handleRemoveCity}
        >
          -
        </Button>
        <div className="card-item">
          <img src="/assets/icons/city.png" alt="" className="city-img" />
          <h3>{city?.name}</h3>
        </div>
        <div className="card-item">
          <img
            src="/assets/icons/temperature.png"
            alt=""
            className="city-img"
          />
          <h3>
            {city?.main?.temp}
            <sup>o</sup>C
          </h3>
        </div>
      </Link>
    </li>
  );
}
