import { useState } from "react";
import api from "../api";
import { Alert } from '@mui/material';
import Note from "../components/Note"
import "../styles/Home.css"


export default function CreateNotesForm({createNote, content, title, setContent, setTitle,}) {

    return (
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
    )
}