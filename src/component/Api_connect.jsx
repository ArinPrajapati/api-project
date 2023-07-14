import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import Animal from "./Animal";

export default function Api_connect() {
  const [data, setData] = useState("");
  const [loading, seLoading] = useState(false);
  const [showAnimalDetails, setShowAnimalDetails] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  async function getData() {
    try {
      seLoading(true);
      const response = await axios
        .get("https://api.api-ninjas.com/v1/animals?name=fox", {
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

  function handleClick(animal) {
    setSelectedAnimal(animal);
    setShowAnimalDetails(true);
  }

  return (
    <>
      {loading == true ? <Loading /> : ""}
      {data && data.length > 0 ? (
        <ul>
          {data.map((animal) => (
            <div key={animal.name}>
              <li >{animal.name}</li>
             
              <button onClick={() => handleClick(animal)}>open</button>
               {showAnimalDetails && selectedAnimal && (
                <Animal animal={selectedAnimal} />
              )}
            </div>
           
          ))}
        </ul>
      ) : null}
     

      {console.log(data)}
    </>
  );
}
