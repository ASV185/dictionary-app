import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="Design"/>
    </div>
  );
} // Added Design as a default word for search input

export default App;
