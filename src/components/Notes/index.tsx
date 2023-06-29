import { INote } from "../../utils/types";
import "./index.css";

interface ICityNotesProps {
  note: INote;
  onEditNote: (note: INote) => void;
  onDeleteNote: (note: INote) => void;
}

export default function Notes({
  note,
  onEditNote,
  onDeleteNote,
}: ICityNotesProps) {
  return (
    <li className="card box-shadow">
      <h3>{note.text}</h3>
      <div className="notes-footer">
        <img
          src="/assets/icons/delete.png"
          alt=""
          className="icon-img"
          onClick={() => onDeleteNote(note)}
        />
        <img
          src="/assets/icons/edit.png"
          alt=""
          className="icon-img"
          onClick={() => onEditNote(note)}
        />
      </div>
    </li>
  );
}
