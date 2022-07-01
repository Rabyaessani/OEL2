import React from "react";

import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

function Gridview() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The Id you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter CarID:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label Class='car-name'>Enter CarName:
        <input 
           Class="car-name"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit"  Class="cv-btn"/>
    </form>
  )
}

export default Gridview;