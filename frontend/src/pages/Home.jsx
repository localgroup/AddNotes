import { useState } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"


export default function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    alert("Note created!");
                    // Fetch the updated list of notes
                    api.get("/api/notes/").then((res) => {
                        setNotes(res.data);
                    });
                } else {
                    alert("Failed to make note.");
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}