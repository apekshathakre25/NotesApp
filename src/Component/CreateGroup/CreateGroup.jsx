import React from "react";
import css from "../CreateGroup/CreateGroup.module.css";

const CreateGroup = ({ isActive, setIsActive }) => {
  return (
    <div
      className={`${css.profile} ${isActive === true ? css.activeProfile : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={css.initials}></div>
      <p>Puneet</p>
    </div>
  );
};

export default CreateGroup;