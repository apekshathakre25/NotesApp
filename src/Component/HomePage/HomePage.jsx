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
  const handleAddClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <h3>Pocket Notes</h3>
        <CreateGroup isActive={isActive} setIsActive={setIsActive} />
        <div className={css.Button}>
          <img src={button} alt="Button Image" />
          <p onClick={handleAddClick} className={css.add}>
            +
          </p>
        </div>
      </div>
      {isActive ? (
        <CreateNotes />
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
      {isPopupOpen ? <GroupPopUp /> : <></>}
    </div>
  );
};

export default HomePage;