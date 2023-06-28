import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { INote, IWeatherInfo } from "../../utils/types";
import { useMemo, useState } from "react";
import WeatherDetails from "../../components/WeatherDetails";
import "./index.css";
import Button from "../../components/Button";
import Notes from "../../components/Notes";
import { v4 as uuidv4 } from "uuid";

export default function Details() {
  const selectedCity = localStorage.getItem("selected-city");
  const city: IWeatherInfo | undefined = selectedCity
    ? JSON.parse(selectedCity)
    : undefined;
  const notesKey = `${city?.location?.name}-notes`;

  const [selectedCityNotes, setSelectedCityNotes] = useLocalStorage<
    INote[] | undefined
  >(notesKey, undefined);
  const [favCitiesTemp, setFavCitiesTemp] = useLocalStorage<
    IWeatherInfo[] | undefined
  >("favorite-cities", undefined);
  const [inputNote, setInputNote] = useState("");
  const [editNote, setEditNote] = useState<INote | null>(null);

  const isCityFavorites = useMemo(() => {
    return favCitiesTemp
      ? favCitiesTemp.some(
          (favCity) => favCity.location.name === city?.location?.name
        )
      : false;
  }, [city?.location?.name, favCitiesTemp]);

  const onSetNote = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setInputNote(event.currentTarget.value);
  };

  const resetNote = () => {
    setEditNote(null);
    setInputNote("");
  };

  const onSaveNote = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editNote) {
      const newNotes = selectedCityNotes?.map((note) => {
        if (note.id === editNote.id) {
          return {
            ...note,
            text: inputNote,
          };
        }
        return note;
      });
      setSelectedCityNotes(newNotes);
      resetNote();
      return;
    }
    const newNote = {
      id: uuidv4(),
      text: inputNote,
    };
    const newNotes = [newNote, ...(selectedCityNotes || [])];
    setSelectedCityNotes(newNotes);
    setInputNote("");
  };

  const onEditNote = (note: INote) => {
    setEditNote(note);
    setInputNote(note.text);
  };

  const onDeleteNote = (note: INote) => {
    resetNote();
    const newNotes = selectedCityNotes?.filter(
      (cityNote) => cityNote.id !== note.id
    );
    setSelectedCityNotes(newNotes);
  };

  const onAddFavorites = () => {
    if (city && favCitiesTemp) {
      const newFavs = [city, ...(favCitiesTemp || [])];
      setFavCitiesTemp(newFavs);
    }
  };

  const onRemoveFavorites = () => {
    const newFavs = favCitiesTemp?.filter(
      (favCity) => favCity.location.name !== city?.location.name
    );
    setFavCitiesTemp(newFavs);
  };

  return (
    <main className="details-main max-width-inhibitor">
      {city?.location ? (
        <>
          <WeatherDetails
            city={city}
            isFavorites={isCityFavorites}
            onAddFavorites={onAddFavorites}
            onRemoveFavorites={onRemoveFavorites}
          />
          <form onSubmit={onSaveNote} className="city-form-notes">
            <textarea
              placeholder="Save notes on city..."
              onChange={onSetNote}
              value={inputNote}
              className="city-notes-input"
              required
            ></textarea>
            <Button type="submit">Submit</Button>
          </form>
          <ul className="city-notes">
            {selectedCityNotes?.map((note) => (
              <Notes
                key={note.id}
                note={note}
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
              />
            ))}
          </ul>
        </>
      ) : (
        <h1>
          There was an error. Please go to <Link to="/">home</Link>
        </h1>
      )}
    </main>
  );
}
