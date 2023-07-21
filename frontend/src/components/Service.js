// import Labour from "./Labour";
import { useNavigate } from "react-router"
import Plumber from "./Plumber";
import Electrician from "./Electrician";
import Barber from "./Barber";

export default function Service(){
    return <div>     
   <div className="container" id="cardsection">
           <h1 style={{textAlign:"center",margin:"100px 0 70px 0"}}><b>What Are You Looking For?</b></h1>
           <div id="cardcon" className="d-flex" style={{justifyContent:"center"}}>
              <Plumber/>
              <Electrician/>
              <Barber/>
           </div>
    </div>
    </div>
}