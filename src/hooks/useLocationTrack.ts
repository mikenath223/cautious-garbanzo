import fetchIPAddress from "../utils/getIPAddress";
import isValid from "../utils/validityChecker";
import { IPResponse } from "../utils/types";
import { isNil } from "lodash";
import { useState } from "react";

interface ILatLong {
  latitude: string | null;
  longitude: string | null;
}

type setLatLong = (value: ILatLong) => void

const formatCoords = (latitude: number | string, longitude: number | string) => {
  return { latitude: latitude.toString(), longitude: longitude.toString() }
}

const getIPAddress = async (setLatLong: setLatLong) => {
  try {
    const data: IPResponse = await fetchIPAddress()
    if (isValid(data)) {
      const { latitudeData, longitudeData } = data;
      const latitude =
        isNil(latitudeData) || isNaN(Number(latitudeData)) ? '00' : latitudeData
      const longitude =
        isNil(longitudeData) || isNaN(Number(longitudeData)) ? '00' : longitudeData
      const latlong = formatCoords(latitude, longitude);
      setLatLong(latlong)
    }
  } catch (_error) {
  }
}

const useLocationTrack = () => {
  const [latLong, setLatLong] = useState<ILatLong>({ latitude: null, longitude: null })

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latlong = formatCoords(
          position.coords.latitude,
          position.coords.longitude
        )
        setLatLong(latlong)
      },
      (error) => {
        console.error(error)
        getIPAddress(setLatLong)
      }
    )
  } else {
    getIPAddress(setLatLong)
  }
  return latLong;
}

export default useLocationTrack;