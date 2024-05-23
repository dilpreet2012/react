import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const add=()=>{
    setCount(prevcount=>prevcount+1);
    setCount(prevcount=>prevcount+1);
    setCount(prevcount=>prevcount+1);
  }
  const sub=()=>{
    setCount(count-1);
  }

  return (
    <>
      <h3>Value of counter={count}</h3>
      <p>Lorem ipsum {count}dolor sit amet.</p>
      <button onClick={add}>Increment:{count}</button>
      <button onClick={sub}>Decrement:{count} </button>

    </>
  )
}

export default App
