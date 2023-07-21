// import { useNavigate } from "react-router"
import { Link } from "react-router-dom";

export default function Home(){
    // const navigate = useNavigate();
    return <div>
    <div className="container">
    <div className="row" style={{height:'100%',marginTop:"50px"}}>
      <div className="col-md-7" style={{alignContent:"center",padding:"50px"}}>
        <div className="d-flex"  style={{alignItems:"center"}}>
          <div className="col-md-12"  style={{padding:"70px 5px 5px 10px",marginTop:"15px"}}>
            <span style={{marginTop:"15px",color:"blueviolet"}}>Plumbers | Electricians | Hair Dressers</span>
            <p className="display-3" style={{fontWeight:"bold",marginTop:"15px"}}>Expert & Professional Home Services</p>
            <p  style={{marginTop:"15px"}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button type="button" className="btn btn-primary btn-lg" style={{borderRadius:"0px",marginTop:"15px",backgroundColor:"blueviolet",border:"1px solid blueviolet"}}><Link style={{textDecoration:"none",color:"white"}} to="/Service">Book Now &rarr;</Link></button>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="bg-image" style={{backgroundImage:"url(plumber-pointing-front-removebg-preview.png)",width:"100%",height:"700px",backgroundRepeat:"no-repeat"}}></div>
      </div>
    </div>
  </div>
    </div>
}