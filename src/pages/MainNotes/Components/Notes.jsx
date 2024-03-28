import React, { useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import SingleNote from "./SingleNote";

const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  const editHandler = (id, text) => {
    setEditId(id);
    setInputText(text);
  };

  const saveHandler = () => {
    if (editId) {
      setNotes(
        notes.map((note) =>
          note.id === editId ? { ...note, text: inputText } : note
        )
      );
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          text: inputText,
        },
      ]);
    }

    setInputText("");
    setEditId(null);
  };

  const deleteHandler = (id) => {
    const newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) =>
        editId === note.id ? (
          <CreateNote
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
          />
        ) : (
          <SingleNote
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        )
      )}
      {editId === null ? (
        <CreateNote
          inputText={inputText}
          setInputText={setInputText}
          saveHandler={saveHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Notes;
