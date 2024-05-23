import Card from "./Card"
function App() {
let a=50;
let arr=['sun','mon','tue','wed','thur']
  return (
    <>
      <h1 className="bg-green-500">Tailwind test</h1>
   <Card channel="channel one" age={a} description="education" present={arr}/> 
   <Card channel="channel two" />


    </>
  )
}

export default App
