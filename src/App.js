import './app.scss'
import { useState } from "react";
import Palindromo from "./Palindromo";
import { Input } from '@mui/material';

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.split(" ").join(""));
  };

  return (
    <div className="App">
    <div className='appWrapper'>
      <h1>Detector de palíndromos</h1>
        <Input
          placeholder="Checkea tu palíndromo aqui.."
          type="text"
          onChange={handleChange}
          className="inputCheck"
        ></Input>
      <Palindromo text={text} />
    </div>
    </div>
  );
}

export default App;
