import React, { useState, useEffect } from 'react';
import api from "../api";
import { Alert } from '@mui/material';
import NotesCard from './NotesCard';import "../styles/Card.css"

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setLoading(true);
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}`)
      .then((res) => {
        if (res.status === 204) {
          setAlert({ severity: "success", message: "Note deleted!" });
        } else {
          setAlert({ severity: "error", message: "Failed to delete note." });
        }
        getNotes();
      })
      .catch((error) => {
        setAlert({ severity: "error", message: error.toString() });
      });
  };

  return (
    <div>
      <div>
        {alert && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}
      </div>
      <div className="CardContainer">
        {notes.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          notes.map((note) => (
            <NotesCard
              key={note.id}
              title={note.title}
              content={note.content}
              formattedDate={new Date(note.created_at).toLocaleDateString("en-US")}
              onDelete={() => deleteNote(note.id)}
            />
          ))
        )}
      </div>
    </div>


  );
};

export default Note;