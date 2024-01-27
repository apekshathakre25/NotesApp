import React, { useState, useEffect, useRef } from "react";
import css from "../GroupPopUp/GroupPopUp.module.css";

const GroupPopUp = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState(" ");

  const handleInput = (event) => {
    setGroupName(event.target.value);
  };

  const handleCreate = () => {
    onCreateGroup(groupName);
    setGroupName(" ");
  };

  return (
    <div className={css.overlay}>
      <div className={css.selectionPage}>
        <span>Create new group</span>
        <div className={css.selection}>
          <label>Group Name</label>
          <input
            type="text"
            className={css.input}
            placeholder="Enter Group Name"
            value={groupName}
            onChange={handleInput}
          />
        </div>
        <div className={css.choiceDiv}>
          <span>Choose color</span>
          <div className={css.chooseColor1}></div>
          <div className={css.chooseColor2}></div>
          <div className={css.chooseColor3}></div>
          <div className={css.chooseColor4}></div>
          <div className={css.chooseColor5}></div>
          <div className={css.chooseColor6}></div>
        </div>
        <div>
          <button className={css.create} onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupPopUp;
