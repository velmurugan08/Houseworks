// import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default function Plumber(){
    // const navigate = useNavigate();
    let name="PLUMBER"
    return <div>
       {/* onClick={() => navigate('/Labour/plumber')} */}
        <div className="cards">
               <div className="card text-center" style={{width:"18rem",marginLeft:"20px"}}>
                 {/* <img src="client-doing-hair-cut-barber-shop-salon.jpg" className="card-img-top" alt="..."></img> */}
                 <div className="card-body">
                   <h3 className="card-title"><Link style={{textDecoration:"none",color:"black"}} to={"/Search/"+name}>Plumber</Link></h3>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
               </div>
             </div>
    </div>
}