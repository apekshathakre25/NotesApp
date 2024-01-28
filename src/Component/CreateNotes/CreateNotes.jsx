import React, { useState } from "react";
import css from "../CreateNotes/CreateNotes.module.css";
import pointer from "../../assets/pointer.svg";
import getGroupInitials from "../GroupUtils.jsx/getIntials";

const CreateNotes = ({ groupName }) => {
  const groupInitials = getGroupInitials(groupName);

  const [groupNotes, setGroupNotes] = useState({});
  const notes = groupNotes[groupName] || [];
  const [currentNote, setCurrentNote] = useState("");

  const handleTextChange = (event) => {
    setCurrentNote(event.target.value);
  };

  const handlePointerClick = () => {
    if (currentNote.trim() !== "") {
      const currentDate = new Date();

      // Store note and timestamp separately
      const note = currentNote.trim();
      const timestamp = currentDate.toLocaleString();

      setGroupNotes({
        ...groupNotes,
        [groupName]: [...notes, { note, timestamp }],
      });

      setCurrentNote("");
    }
  };

  return (
    <div className={css.Notes}>
      <div className={css.header}>
        <span className={css.groupInitials}>{groupInitials}</span>
        <span className={css.groupName}>{groupName}</span>
      </div>
      <div className={css.NotesContainer}>
      {notes.map((note, index) => (
        <div key={index} className={css.NoteBox}>
          <div className={css.note}>{note.note}</div>
          <span className={css.timestamp}>{note.timestamp}</span>
        </div>
      ))}
    </div>
      <div className={css.textareaContainer}>
        <div className={css.textareaBox}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={currentNote}
            onChange={handleTextChange}></textarea>
          <img
            onClick={handlePointerClick}
            className={css.pointer}
            src={pointer}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;
