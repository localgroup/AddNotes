import { useState } from "react";
import api from "../api";
import "../styles/Home.css"
import CreateNotesForm from "../components/CreateNotesForm";
import ActionAlerts from '../components/ActionAlerts';


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
            setAlert({ open: true, severity: "success", message: "Note created" });
            api.get("/api/notes/").then((res) => {
              setNotes(res.data);
              setContent("");
              setTitle("");
            });
          } else {
            setAlert({ open: true, severity: "error", message: "Failed to create note." });
          }
        })
        .catch((err) => {
          setAlert({ open: true, severity: "error", message: err.toString() });
        });
    };


    return (
      <div>
        {alert && (
          <ActionAlerts
          severity={alert.severity}
          message={alert.message}
          open={alert.open}
          onClose={() => setAlert({ ...alert, open: false })}
        />
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