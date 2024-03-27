import React, { useState } from "react";
import "./style.css";
import Note from "./Components/Notes.jsx";
const MainNotes = () => {
  return (
    <div className="main">
      <div className="header flex">
        <h1 className="title">Notes</h1>
      </div>
      <Note />
    </div>
  );
};
export default MainNotes;
