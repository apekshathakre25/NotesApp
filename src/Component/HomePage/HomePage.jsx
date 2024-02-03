import React from "react";
import css from "../HomePage/HomePage.module.css";
import cover from "../../assets/Cover.png";
import vector from "../../assets/Vector.svg";
import button from "../../assets/Add.svg";
import { useState } from "react";
import GroupPopUp from "../GroupPopUp/GroupPopUp.jsx";
import CreateGroup from "../CreateGroup/CreateGroup.jsx";
import CreateNotes from "../CreateNotes/CreateNotes.jsx";

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [groups, setGroups] = useState([]);

  const handleAddClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCreateGroup = (groupName) => {
    setGroups([...groups, { name: groupName }]);
    setIsPopupOpen(false);
  };

  const handleGroupClick = (groupName) => {
    setIsActive(groupName);
  };
  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <h3>Pocket Notes</h3>
        <div className={css.groupsContainer}>
          {Array.isArray(groups) &&
            groups.map((group, index) => (
              <CreateGroup
                key={index}
                groupName={group.name}
                isActive={group.name === isActive}
                setIsActive={() => handleGroupClick(group.name)}
              />
            ))}
        </div>
        <div className={css.Button}>
          <img src={button} alt="Button Image" />
          <p onClick={handleAddClick} className={css.add}>
            +
          </p>
        </div>
      </div>
      {isActive ? (
        <CreateNotes groupName={isActive} />
      ) : (
        <div className={css.rightSide}>
          <div>
            <img className={css.cover} src={cover} alt="Cover Image" />
          </div>
          <div className={css.content}>
            <h1>Pocket Notes</h1>
            <p>
              Send and receive messages without keeping your phone online.{" "}
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone
            </p>
          </div>
          <div className={css.Encrypted}>
            <img src={vector} alt="Vector Image" />{" "}
            <span>end-to-end encrypted</span>
          </div>
        </div>
      )}
      {isPopupOpen ? <GroupPopUp onCreateGroup={handleCreateGroup} /> : <></>}
    </div>
  );
};

export default HomePage;
