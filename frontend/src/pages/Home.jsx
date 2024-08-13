import { useState } from "react";
import api from "../api";
import { Alert } from '@mui/material';
import "../styles/Home.css"
import CreateNotesForm from "../components/CreateNotesForm";


export default function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [alert, setAlert] = useState(null);


    const createNote = (e) => {
      e.preventDefault();
      api
        .post("/api/notes/", { content, title })
        .then((res) => {
          if (res.status === 201) {
            setAlert({ severity: "success", message: "Note created" });
            api.get("/api/notes/").then((res) => {
              setNotes(res.data);
            });
          } else {
            setAlert({ severity: "error", message: "Failed to create note." });
          }
        })
        .catch((err) => {
          setAlert({ severity: "error", message: err.toString() });
        });
    };


    return (
      <div>
        {alert && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}
        <CreateNotesForm 
            createNote={createNote} 
            content={content} 
            title={title} 
            setContent={setContent} 
            setTitle={setTitle}
            />
      </div>
    );
  }   