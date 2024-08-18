import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api";
import "../styles/Home.css";
import CreateNotesForm from "../components/CreateNotesForm";
import ActionAlerts from '../components/ActionAlerts';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [alert, setAlert] = useState(null);


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const createNote = (data) => {
    api
      .post("/api/notes/", data)
      .then((res) => {
        if (res.status === 201) {
          setAlert({ open: true, severity: "success", message: "Note created" });
          api.get("/api/notes/").then((res) => {
            setNotes(res.data);
            reset(); // Clear form fields
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
      <CreateNotesForm onSubmit={createNote} className="CreateNotesForm"/>
    </div>
  );
}
