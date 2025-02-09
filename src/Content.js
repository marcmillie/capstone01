import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Jireh', 'Sky', 'Zee'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log('Clicked')
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
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2('Zee')}>Click Me Too</button>
      <button onClick={(e) => handleClick3(e)}>Click Me as Well</button>
    </main>
  )
}

export default Content