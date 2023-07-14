import { useState } from "react";
import Error from "./Error"

export default function Animal(props) {
  const [showAnimalDetails, setShowAnimalDetails] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const { name, characteristics, taxonomy , locations } = props.animal || {};
  const {distinctive_feature, temperament, training, diet, average_litter_size, type, common_name, slogan, group, color, skin_type, lifespan} = characteristics || {};

  const {family , genus , kingdom , order, phylum , scientific_name} = taxonomy || {};

  
  if(props.animal === undefined){
    return(  <Error />) 
  }
  

  console.log(props.animal);
  return (
   
    <>
       <div className="heading">
           <h2>{name}</h2>
           <h3>{common_name}</h3>
       </div>
       {slogan ? <p>"{slogan} "</p>:<p>" ... is that a {name} you have ? "</p>}
       <p>Color: {color}</p>
       <p>Diet: {diet}</p>
       <p>Lifespna: {lifespan}</p>
       <p>temperament: {temperament}</p>
       <p>Location: {Array.isArray(locations) && locations.length > 0 ? locations.join(', '):'no info'}</p>
       

 
    </>
  );
}
