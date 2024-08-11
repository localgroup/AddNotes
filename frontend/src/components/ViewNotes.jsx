// import { useEffect, useState } from "react";
// import api from "../api";
// import Note from "./Note";
// import LoadingIndicator from "../components/LoadingIndicator";
// import SimpleContainer from "./SimpleContainer";

// export default function ViewNotes() {
//   const [notes, setNotes] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getNotes();
//   }, []);

//   const getNotes = () => {
//     api
//       .get("/api/notes/")
//       .then((res) => res.data)
//       .then((data) => {
//         setNotes(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//         console.error(err);
//       });
//   };

//   const deleteNote = (id) => {
//     api
//       .delete(`/api/notes/delete/${id}`)
//       .then((res) => {
//         if (res.status === 204) alert("Note deleted!");
//         else alert("Failed to delete note.");
//         getNotes();
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   };

//   return (
//     <SimpleContainer>
//       <div>
//         <center>
//           {loading && <LoadingIndicator />}
//         </center>
//       </div>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         notes.map((note) => (
//           <Note key={note.id} note={note} deleteNote={deleteNote} />
//         ))
//       )}
//     </SimpleContainer>
//   );
// }


import { useEffect, useState } from "react";
import api from "../api";
import Note from "./Note";
import LoadingIndicator from "../components/LoadingIndicator";
import SimpleContainer from "./SimpleContainer";

export default function ViewNotes() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        console.log("Notes fetched successfully:", data);
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => {
        alert(error);
      });
  };

  if (loading) {
    return (
      <SimpleContainer>
        <div>
          <center>
            <LoadingIndicator />
          </center>
        </div>
      </SimpleContainer>
    );
  }

  if (error) {
    return (
      <SimpleContainer>
        <p>Error: {error}</p>
      </SimpleContainer>
    );
  }

  if (notes.length === 0) {
    return (
      <SimpleContainer>
        <p>No notes found.</p>
      </SimpleContainer>
    );
  }

  return (
    <SimpleContainer>
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </SimpleContainer>
  );
}