
function App() {
  
let counter =5;
const add=()=>{
  counter++;
  console.log(counter);
}
const remove=()=>{
  console.log(counter);
  counter--;
}

  return (
    <>
      <h2>Second project of react</h2>
      <p>Counter value:{counter}</p>
      <button onClick={add}>Increment value{counter}</button><br />
      <button onClick={remove}>Decrement value{counter}</button>
<p>{counter}</p>
    </>
  )
}

export default App
