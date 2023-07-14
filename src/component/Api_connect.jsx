import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import Animal from "./Animal";

export default function Api_connect(props) {

  if (typeof props.name === "undefined") {
    return null;
  }

  const [data, setData] = useState("");
  const [loading, seLoading] = useState(false);
  // const { name } = props.name || {};
  

 

  async function getData() {
    try {
      seLoading(true);
      const response = await axios
        .get(`https://api.api-ninjas.com/v1/animals?name=${props.name}`, {
          headers: {
            "X-Api-Key": "syADX+R4WkxmKMstuOE6Gg==ipIiD9ut7tcJ5X4w",
          },
        })
        .then((response) => setData(response.data));
    } catch (error) {
      <h1>{error}</h1>
    }

  
  }

  useEffect(() => {
    getData();
   
  }, [props.name]);

  seLoading(false);
  

  return (
    <>
      {loading == true ? <Loading /> : null}
      {data && data.length > 0 ? (
        <>{data.map((animal) => {
         return <Animal animal={animal} />
        })}</>
      
      ) : null}
     

      {console.log(data)}
    </>
  );
 
}

Api_connect.defaultprops = {
  name:"fox"
}