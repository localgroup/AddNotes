import { useState } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"


export default function deleteNote() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const getNotes = () => {
        api
          .get("/api/notes/")
          .then((res) => res.data)
          .then((data) => {
            setNotes(data);
          })
          .catch((err) => {
            console.error(err);
          });
        }

    const deleteNote = (id) => {
    api
        .delete(`/api/notes/delete/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Note deleted!");
            else alert("Failed to delete note.");
            getNotes();
        })
        .catch((error) => alert(error));
    };

    return (
        <div>   
            {notes.map((note) => (
                <Note note={note} onDelete={deleteNote} key={note.id} />
            ))}
        </div>
    )
}