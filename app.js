import React, { useState } from 'react';

function App() {
  // Estados
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  // Cambiar nombre haciendo clic
  const handleClick = (profName) => {
    setName(profName);
  };

  // Bonus: Cambiar nombre con formulario
  const changeName = (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;
    setName(newName);
    setNewName(""); // Limpiar campo de entrada
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Teacher Name: {name}</h2>

      <ul>
        <li onClick={() => handleClick("Data")}>Data</li>
        <li onClick={() => handleClick("Reyes")}>Reyes</li>
        <li onClick={() => handleClick("Yolanda")}>Yolanda</li>
      </ul>

      {/* BONUS: Formulario para cambiar el nombre */}
      <form onSubmit={changeName}>
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
