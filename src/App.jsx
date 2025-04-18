import React, { useState } from 'react';
import './App.css'; // Asegurate de tener este archivo

function App() {
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  const changeName = (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;
    setName(newName);
    setNewName("");
  };

  return (
    <div className="app-container">
      <h2>Teacher Name: {name}</h2>

      <form onSubmit={changeName} className="form">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
