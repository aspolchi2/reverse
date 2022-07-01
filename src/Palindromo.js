import React, { useEffect, useState } from 'react'

const Palindromo = ({text}) => {
    const [reverse, setReverse] = useState("")

    useEffect(() => {
        setReverse(text.split("").reverse().join(""))
    }, [text])

    if (text.length === 0){
        return <p>Escribi arriba para empezar </p>
    }
  return (
    <div>
    {text}
    <br/>
    {reverse}
        {text === reverse ? <p>Es Palíndromo</p> : <p>No es palíndromo</p>}
    </div>
  )
}

export default Palindromo