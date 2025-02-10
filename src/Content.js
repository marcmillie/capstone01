import React from 'react'
import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Zee');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Jireh', 'Sky', 'Zee'];
    const int = Math.floor(Math.random() * 3);
    setName (names[int]);
  };

  const handleClick = () => {
    console.log(count)
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }



  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Click Me</button>
      <button onClick={handleClick}>Click Me Too</button>
      <button onClick={(e) => handleClick3(e)}>Click Me as Well</button>
    </main>
  )
}

export default Content