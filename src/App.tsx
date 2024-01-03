
import { useState } from 'react'
function App() {
   

  const [card , setcard] = useState(1);

  return (
    <>
    <div className="w-80 m-10 p-2  rounded-md bg-red-600  ">
    <img src="./public/dress.iamge.jpg" alt="" className="w-full h-52 rounded-md p-1"  />
       <div className="px-6 py-4">
         <h1 className="text-2xl font-bold p-3 m-1.5 ">
          {card} buy
          </h1>
          <button className="border-spacing-2 p-1.5 m-1 rounded-md font-bold bg-slate-400 " onClick={()=>{
            setcard(card + 1)
          }} >buy sucsses</button>
          <button className="border-spacing-2 p-1.5 m-1 rounded-md font-bold bg-slate-400 " onClick={()=>{
            setcard(card - 1)
          }} >cancle kharide</button>
       </div>
     </div>
    </>
  )
}

export default App
