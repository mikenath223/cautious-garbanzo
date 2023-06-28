import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import FavCities from "../../components/FavCities";
import Searchbar from "../../components/Searchbar";
import useLocationTrack from "../../hooks/useLocationTrack";
import "./index.css";
import { getCityWeather } from "../../utils/requestData";

let isRunGetLocation = false;

export default function Home() {
  const navigate = useNavigate();
  const latLongitude = useLocationTrack();

  const handleNavigate = useCallback(async () => {
    const cityWeather = await getCityWeather(latLongitude, false);
    if (cityWeather?.location?.name) {
      localStorage.setItem("selected-city", JSON.stringify(cityWeather));
      navigate("/details");
    }
  }, [latLongitude, navigate]);

  const onGetLocation = useCallback(async () => {
    if (latLongitude !== "" && !isRunGetLocation) {
      isRunGetLocation = true;
      handleNavigate();
    }
  }, [latLongitude, handleNavigate]);

  useEffect(() => {
    onGetLocation();
  }, [onGetLocation]);

  return (
    <main className="max-width-inhibitor home-main">
      <Searchbar />
      <FavCities />
    </main>
  );
}
