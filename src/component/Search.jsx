import { useState, useEffect } from "react";
import Animal from "./Animal";
import axios from "axios";
import Loading from "../Loading";
import "../style/Search.css"
import Error from "./Error"; 


export default function Search() {
  const [item, setItem] = useState("fox");
  const [data, setData] = useState([]);
  const [loading, seLoading] = useState(false);
  const [errorM , setErrorM] = useState("")
  const [errorS , setErrorS] = useState(true)

 
  async function getData() {
    try {
      seLoading(true);
      const response = await axios
        .get(`https://api.api-ninjas.com/v1/animals?name=${item}`, {
          headers: {
            "X-Api-Key":import.meta.env.VITE_API_KEY,
          },
        })
        .then((response) => setData(response.data));
        setErrorS(false)
    } catch (error) {
      setErrorM(error.message)
     
      // setErrorM(true)  
      
    } finally {
      seLoading(false);
    }
  }
  useEffect (()=>{
    getData()
  },[])

  return (
    <>
      <div className="inpuDiv">
          <div id="igroup">
              <input 
                type="text"
                value={item}
                onChange={(e) => {
                    setItem(e.target.value)
              
                }}
              />
              <button onClick={()=>{getData(item)}}>Find</button>
          </div>
      </div>
      
      {loading == true ? <Loading /> : null}
      {errorS == true ? <Error error={errorM}/> : null }
      {data && data.length > 0 ? (
        <>
          {data.map((animal) => {
            return <Animal key={animal.name} animal={animal} />;
          })}
        </>
      ) : null}
    </>
  );
}
