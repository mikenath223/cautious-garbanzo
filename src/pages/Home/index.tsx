import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import FavCities from "../../components/FavCities";
import Searchbar from "../../components/Searchbar";
import useLocationTrack from "../../hooks/useLocationTrack";
import "./index.css";
import { getCityWeather } from "../../utils/requestData";

let isRunGetLocation = false;

export default function Home() {
  const navigate = useNavigate();
  const { latitude, longitude } = useLocationTrack();
  const [error, setError] = useState(false);

  const handleNavigate = useCallback(async () => {
    try {
      const cityWeather = await getCityWeather(
        null,
        false,
        latitude,
        longitude
      );
      if (cityWeather?.name) {
        localStorage.setItem("selected-city", JSON.stringify(cityWeather));
        navigate("/details");
      }
    } catch (error) {
      setError(true);
    }
  }, [latitude, longitude, navigate]);

  const onGetLocation = useCallback(async () => {
    if (latitude && longitude && !isRunGetLocation) {
      isRunGetLocation = true;
      handleNavigate();
    }
  }, [latitude, longitude, handleNavigate]);

  useEffect(() => {
    onGetLocation();
    setError(false);
  }, [onGetLocation]);

  return (
    <main className="max-width-inhibitor home-main">
      <Searchbar />
      {error && (
        <div className="error-search">
          "There was an error retrieving search result! Please try again"
        </div>
      )}
      <FavCities />
    </main>
  );
}
