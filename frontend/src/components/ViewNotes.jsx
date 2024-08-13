import { useEffect, useState } from "react";
import api from "../api";
import Note from "./Note";
import LoadingIndicator from "../components/LoadingIndicator";
import { Alert } from '@mui/material';
import BasicStack from "./BasicStack";

export default function ViewNotes() {
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

    if (loading) {
      return (
        <BasicStack>
          <div>
            <center>
              <LoadingIndicator />
            </center>
          </div>
        </BasicStack>
      );
    }

    if (error) {
      return (
        <BasicStack>
          <Alert severity="error">{error}</Alert>
        </BasicStack>
      );
    }

    if (notes.length === 0) {
      return (
        <BasicStack>
          <p>No notes found.</p>
        </BasicStack>
      );
    }

    return (
      <BasicStack>
        {alert && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </BasicStack>
    );
  }