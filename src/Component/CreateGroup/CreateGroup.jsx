import React from "react";
import css from "../CreateGroup/CreateGroup.module.css";
import getGroupInitials from "../GroupUtils.jsx/getIntials";

const CreateGroup = ({ isActive, setIsActive, groupName }) => {
  if (!groupName || typeof groupName !== "string") {
    return null;
  }

  const initials = getGroupInitials(groupName);

  return (
    <div
      className={`${css.profile} ${isActive === true ? css.activeProfile : ""}`}
      onClick={() => setIsActive(!isActive)}>
      <span className={css.initials}>{initials}</span>
      <span className={css.groupName}>{groupName}</span>
    </div>
  );
};

export default CreateGroup;
