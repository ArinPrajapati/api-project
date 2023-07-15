import "./style/Loading.css";
import img from '../src/Loading.gif'

export default function Loading(){
  return(
    <div className="loading">
      <img src={img} alt="" />
    

    </div>
  )
}