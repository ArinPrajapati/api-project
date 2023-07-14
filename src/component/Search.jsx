import { useState } from "react"
import Api_connect from "./Api_connect"

export default function Search(){
    const [item,setItem] = useState("");
    const [paste , setPaste] = useState('')
    return(
       <>
        <form action="">
            <input type="text" value={item} onChange={(e) =>  setItem(e.target.value) } />
            <button onClick={() => {
                setPaste(item)
            }}> click</button>
          
        </form>
         <Api_connect name={paste}/>
         </> 
    )
}