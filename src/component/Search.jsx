import { useState, useEffect } from "react";
import Animal from "./Animal";
import axios from "axios";
import Loading from "../Loading";
import "../style/Search.css"

export default function Search() {
  const [item, setItem] = useState("fox");
  const [data, setData] = useState([]);
  const [loading, seLoading] = useState(false);

  async function getData() {
    try {
      seLoading(true);
      const response = await axios
        .get(`https://api.api-ninjas.com/v1/animals?name=${item}`, {
          headers: {
            "X-Api-Key": "syADX+R4WkxmKMstuOE6Gg==ipIiD9ut7tcJ5X4w",
          },
        })
        .then((response) => setData(response.data));
    } catch (error) {
      <h1>{error}</h1>;
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
          <igroup>
              <input 
                type="text"
                value={item}
                onChange={(e) => {
                    setItem(e.target.value)
              
                }}
              />
              <button onClick={()=>{getData(item)}}>Find</button>
          </igroup>
      </div>

      {loading == true ? <Loading /> : null}
      {data && data.length > 0 ? (
        <>
          {data.map((animal) => {
            return <Animal animal={animal} />;
          })}
        </>
      ) : null}
    </>
  );
}
