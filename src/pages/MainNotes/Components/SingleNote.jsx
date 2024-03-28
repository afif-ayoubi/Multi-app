import React, { useState, useRef } from "react";

const Note = ({ id, text, editHandler, deleteHandler }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [allowMove, setAllowMove] = useState(false);
  const stickyNoteRef = useRef();

  const handleMouseDown=(e)=> {
    setAllowMove(true);
    const dimensions = stickyNoteRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - dimensions.x, y: e.clientY - dimensions.y });
  }

  const handleMouseMove=(e)=> {
    if (allowMove) {
      const x = e.clientX - position.x;
      const y = e.clientY - position.y;
      stickyNoteRef.current.style.left = x + "px";
      stickyNoteRef.current.style.top = y + "px";
    }
  }

  const handleMouseUp=()=> {
    setAllowMove(false);
  }


  return (
    <div
      className="note flex column"
      draggable="true"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    
      style={{ position: "absolute", left: position.x, top: position.y }}
      ref={stickyNoteRef}
    >
      <div className="note-body">{text}</div>
      <div className="note-footer flex" style={{ justifyContent: "flex-end" }}>
        <button className="note-save" onClick={() => deleteHandler(id)}>
          Delete
        </button>{" "}
        &nbsp;
        <button className="note-save" onClick={() => editHandler(id, text)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Note;
