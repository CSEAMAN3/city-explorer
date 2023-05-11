import { useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});

  function handleChange(event) {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  }

  async function getLocation() {
    try {
      const API = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&format=json`;
      const res = await axios.get(API);
      setLocation(res.data[0]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>City Explorer</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={getLocation}>Explore</button>
      <p>{location.display_name}</p>
    </div>
  );
}

export default App;
