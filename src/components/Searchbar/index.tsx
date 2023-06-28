import { useState } from "react";
import Button from "../Button";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { getCityWeather } from "../../utils/requestData";

export default function Searchbar() {
  const [city, setCity] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (city && city?.trim() === "") {
      return setError(true);
    }
    setLoading(true);
    try {
      setError(false);
      const cityWeather = await getCityWeather(city, false);
      if (cityWeather?.name) {
        localStorage.setItem("selected-city", JSON.stringify(cityWeather));
        setCity("");
        navigate("/details");
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCity(newValue);
  };

  const isDisabled = city?.trim() === "" || loading;

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        value={city || ""}
        onChange={onChange}
        type="text"
        name="search"
        id="search"
        placeholder="Search city weather..."
        className="search-input"
        required
      />
      <Button
        type="submit"
        disabled={isDisabled}
        className={isDisabled ? "cursor-none" : "cursor-pointer"}
      >
        Search
      </Button>
      {error && (
        <div className="error-search">
          "There was an error retrieving search result! Please try again"
        </div>
      )}
    </form>
  );
}
