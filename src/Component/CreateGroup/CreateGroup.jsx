import React from "react";
import css from "../CreateGroup/CreateGroup.module.css";

const CreateGroup = ({ isActive, setIsActive, groupName }) => {
  const getInitials = (name) => {
    const words = name.split(" ");
    const initials = words.map((word) =>
      word !== "" ? word[0].toUpperCase() : ""
    );
    return initials.join(" ");
  };

  const initials = getInitials(groupName);

  return (
    <div
      className={`${css.profile} ${isActive === true ? css.activeProfile : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={css.initials}>{initials}</div>
      <p>{groupName}</p>
    </div>
  );
};

export default CreateGroup;
