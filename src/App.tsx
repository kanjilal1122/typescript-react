import "./App.css";
import Note from "./components/note";
import { Notes } from "./components/data";
function App() {
  return (
    <div className="App">
      <h1>Hello React with typescript </h1>
      {Notes.map((note) => (
        <Note  key={note.id} id={note.id}  priority={note.priority} text={note.text} />
      ))}
    </div>
  );
}

export default App;
