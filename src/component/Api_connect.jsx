import axios from "axios";
import { useState ,useEffect } from "react";

export default function Api_connect(){
    const [data , setData] = useState("")     

  async function getData() {


	try {
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
}

   useEffect(()=>{
      getData()
      console.log(data)
      
   },[]);


   return(
   <>
   {data && data.length > 0 (
    <ul>
        {
            data.map(animal => (
                <li > {data[0].name} </li>
            ))
        }
    </ul>
   ) }
   
   
 
   
   </>
   )
}
