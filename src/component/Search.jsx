import { useState, useEffect } from "react";
import Animal from "./Animal";
import axios from "axios";
import Loading from "../Loading";

export default function Search() {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);
  const [loading, seLoading] = useState(false);

  async function getData(name) {
    try {
      seLoading(true);
      const response = await axios
        .get(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
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
  return (
    <>
      <input
        type="text"
        
        onChange={(e) => {
         

          getData(e.target.value);
        }}
      />

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
