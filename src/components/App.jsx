import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heaingText, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleclick() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heaingText} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleclick}>Submit</button>
    </div>
  );
}

export default App;
