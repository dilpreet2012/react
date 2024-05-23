import { useState } from 'react'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
     <div className='h-screen w-screen flex justify-center content-center ' style={{backgroundColor:color}}>
<div className=' flex justify-center content-center h-10 w-80 gap-2'>
  <div className='rounded'style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</div>
  <div className='rounded'style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</div>
  <div className='rounded'style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</div>
  <div className='rounded'style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</div>
  <div className='rounded'style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>lavender</div>

</div>
     </div>
    </>
  )
}

export default App
