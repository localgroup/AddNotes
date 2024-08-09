import ViewNotes from "../components/ViewNotes";


export default function ListNotes() {
    const route = "/api/notes/";

  return <ViewNotes route={route} />;
}