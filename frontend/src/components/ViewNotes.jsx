import { useEffect, useState } from "react";
import api from "../api";
import Note from "./Note";
import LoadingIndicator from "../components/LoadingIndicator";
import SimpleContainer from "./SimpleContainer";

export default function ViewNotes({ route }) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get(route)
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <SimpleContainer>
      <div>
        <center>
          {loading && <LoadingIndicator />}
        </center>
      </div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        notes.map((note) => (
          <Note key={note.id} note={note} />
        ))
      )}
    </SimpleContainer>
  );
}