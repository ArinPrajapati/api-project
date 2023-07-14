import axios from "axios";
import { useState ,useEffect } from "react";
import Loading from "../Loading";
import Char from "./Char"


export default function Api_connect(){
    const [data , setData] = useState("");
    const [loading , seLoading] = useState(false)  ;
    const [charShow ,setCharShow] = useState(false)

  async function getData() {


	try {
        seLoading(true)
		const response = await axios.get('https://api.api-ninjas.com/v1/animals?name=fox',{
            headers:{
                'X-Api-Key': 'syADX+R4WkxmKMstuOE6Gg==ipIiD9ut7tcJ5X4w'
            }}).then(response =>
                setData(response.data) 
            )
		
        
      
       
            
        
	}
	catch (error) {
		console.log(error);
	}

    seLoading(false)
}

   useEffect(()=>{
      getData()
      
      
   },[]);

  function handleClick(){
    if(animal.name === key){
        <button onClick={handleClick}>open</button>
    }  
  }

   return(
   <>
   {loading == true ? <Loading /> : ""  }
     {data && data.length > 0 ? (
        <ul>
          {data.map(animal => (
            <div>
                <li key={animal.name}>{animal.name}</li>
                {charShow && <Char />}
                <button onClick={handleClick}>open</button>
            </div>
            
          ))}
        </ul>
        
      ) : null}
          
      {console.log(data)}
      
   
   
 
   
   </>
   )
}
