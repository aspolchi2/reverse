import React, { useEffect, useState } from "react";

const Palindromo = ({ text }) => {
  const [reverse, setReverse] = useState("");

  useEffect(() => {
    setReverse(text.split("").reverse().join(""));
  }, [text]);

  if (text === "") {
    return <p>Escribi arriba para empezar </p>;
  }
  return (
    <div className="paragraph">
      <div>
        <p>Reversed input: {reverse}</p>
      </div>
      <div>
        {text === reverse ? <p>Es Palíndromo</p> : <p>No es palíndromo</p>}
      </div>
    </div>
  );
};

export default Palindromo;
