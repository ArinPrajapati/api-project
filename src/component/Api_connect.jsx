import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import Animal from "./Animal";

export default function Api_connect() {
  const [data, setData] = useState("");
  const [loading, seLoading] = useState(false);
  

  async function getData() {
    try {
      seLoading(true);
      const response = await axios
        .get("https://api.api-ninjas.com/v1/animals?name=tiger", {
          headers: {
            "X-Api-Key": "syADX+R4WkxmKMstuOE6Gg==ipIiD9ut7tcJ5X4w",
          },
        })
        .then((response) => setData(response.data));
    } catch (error) {
      console.log(error);
    }

    seLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  // function handleClick(animal) {
  //   setSelectedAnimal(animal);
  //   setShowAnimalDetails(true);
  // }

  return (
    <>
      {loading == true ? <Loading /> : ""}
      {data && data.length > 0 ? (
        <>{data.map((animal) => {
         return <Animal animal={animal} />
        })}</>
      
      ) : null}
     

      {console.log(data)}
    </>
  );
}
