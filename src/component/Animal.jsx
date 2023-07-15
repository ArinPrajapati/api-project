import { useState } from "react";
import Error from "./Error"
import "../style/Animal.css"

export default function Animal(props) {
  

  const { name, characteristics, taxonomy , locations } = props.animal || {};
  const {distinctive_feature, temperament,  diet,  common_name, slogan, group,  color,  lifespan} = characteristics || {};

  const {family , genus , kingdom , order, phylum , scientific_name} = taxonomy || {};

  
  if(props.animal === undefined ){
    return( <h1> </h1>) 
  }
  
  

  
  return (
   
    <div id="animal-info">
       <div className="heading">
           <h2>{name}</h2>
         
       <p>"{slogan || `... is that a ${name} you have ?`} "</p>
       </div>
       
       <div className="details">
         <ul>
           <li>Color: {color || "?"}</li>
           <li>Diet: {diet}</li>
           <li>Lifespna: {lifespan}</li>
           <li>temperament: {temperament || "no data on it"}</li>
           <li>Group: {group || <i>"loner"</i>}</li>
           <li>Distinctive Feature : {distinctive_feature || "none"}</li>
           <li>Scientific Name : {scientific_name}</li>
           <li>Location: {Array.isArray(locations) && locations.length > 0 ? locations.join(', '):'no info'}</li>
         </ul>
       </div>
       

 
    </div>
  );
}
