import "../style/Error.css"

export default function Error(props) {
    return (
       <div id="err" >
           <p > {props.error} </p> 
       </div>
    )
} 