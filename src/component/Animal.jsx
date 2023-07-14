import { useState } from "react";
import Error from "./Error"

export default function Animal(props) {
  

  const { name, characteristics, taxonomy , locations } = props.animal || {};
  const {distinctive_feature, temperament,  diet,  common_name, slogan, group,  color,  lifespan} = characteristics || {};

  const {family , genus , kingdom , order, phylum , scientific_name} = taxonomy || {};

  
  if(props.animal === undefined ){
    return( <h1>end</h1>) 
  }
  
  

  console.log(props.animal);
  return (
   
    <>
       <div className="heading">
           <h2>{name}</h2>
           <h3>{common_name}</h3>
       </div>
       {/* {slogan ? <p>"{slogan} "</p>:<p>" ... is that a {name} you have ? "</p>} */}
       <p>"{slogan || `... is that a ${name} you have ?`} "</p>
       <p>Color: {color || "?"}</p>
       <p>Diet: {diet}</p>
       <p>Lifespna: {lifespan}</p>
       <p>temperament: {temperament || "no data on it"}</p>
       <p>Group: {group || <i>"loner"</i>}</p>
       <p>Distinctive Feature : {distinctive_feature || "none"}</p>
       <p>Location: {Array.isArray(locations) && locations.length > 0 ? locations.join(', '):'no info'}</p>
       

 
    </>
  );
}
