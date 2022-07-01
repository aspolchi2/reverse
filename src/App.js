import "./App.css";
import { useState } from "react";
import Palindromo from "./Palindromo";

function App() {
  const [text, setText] = useState(" ");

  const handleChange = (e) => {
    setText(e.target.value.split(" ").join(""));
  };

  return (
    <div className="App">
      <h1>Detector de palíndromos</h1>
        <input
          placeholder="Checkea tu palíndromo aqui.."
          type="text"
          onChange={handleChange}
        ></input>
      <Palindromo text={text} />
    </div>
  );
}

export default App;
