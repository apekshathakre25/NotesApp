import React from "react";
import css from "../CreateNotes/CreateNotes.module.css";
import pointer from "../../assets/pointer.svg";

const CreateNotes = () => {
  return (
    <div className={css.Notes}>
      <div className={css.header}>
        <div></div>
        <p></p>
      </div>
      <div className={css.NotesContainer}>
        <div className={css.NoteBox}>
          <p>
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day's writing projects, words are
            already flowing from their fingers.
          </p>
          <p>time</p>
        </div>
      </div>
      <div className={css.textareaContainer}>
        <div className={css.textareaBox}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <img className={css.pointer} src={pointer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;
