import { Link} from "react-router-dom";
import { useLoaderData, useParams } from "react-router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation,useNavigate} from "react-router-dom";



export default function Bookingpage(){
    const [date,setdate] = useState("");
    const location=useLocation();
    const navigate=useNavigate()
    const notify = () => {
        toast("Service Booked!");
    }
    // let { prof_uname } = useParams();
    const [bookingData, setbookingData] = useState();

    useEffect(() => {
        fetchbookingData();
    }, []);

    async function passdetails(c_uname,p_uname,cmp,ser,pr){
        let values={
            cus_uname:c_uname,
            prof_uname:p_uname,
            cmp_name:cmp,
            service:ser,
            timedate:date,
            price:pr
        }
        await axios.post('http://localhost:8081/booking',values)
        .then((data) => console.log(data));
        alert("Booked Successfully !");
        navigate("/Service")
    }

    const fetchbookingData = async () => {
        try {
        const response = await axios.get("http://localhost:8081/companybook/"+location.state.prof_uname,{
            headers:{'Authorization':{}}
        });
        console.log(response.data)
        setbookingData(response.data);
        
        } catch (error) {
        console.error("Error fetching professional data:", error);
        }
    };




    return (
        <div>
        {bookingData?bookingData.map((el)=>{
            return (
            <div>
            <div style={{backgroundColor:"rgb(147, 239, 255)"}}>
        <section className="vh-60" style={{backgroundColor:"rgb(147, 239, 255)"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                <h3 style={{textAlign:"center",marginTop:"30px"}}><b>Booking Confirmation</b></h3><br></br>
                    <div className="card" style={{borderRadius:"1rem",boxShadow:"0 0 5px 0 #ccc"}}>
                    <div className="card-bodyr" style={{textAlign:"center"}}>
                        <br></br>
                        </div><br></br><br></br>
                        <div className="row d-flex">
                            <div className="col-6" style={{textAlign:"center"}}>
                                <h3>{location.state.cus_name}</h3>
                                <p>@{location.state.cus_uname}</p>
                            </div>
                            <div className="col-6" style={{textAlign:"center"}}>
                                <h3>{el.cmp_name}</h3>
                                <p>@{el.prof_uname}</p>
                            </div>
                        </div><br></br><br></br>
                        <div className="card-text" style={{textAlign:"center"}}>
                            <p><b>Services Booked:  </b>{el.service.join(",")}</p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16" style={{marginRight:"10px"}}>
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg> Location : {el.location}
                            </p>
                            <p className="card-text">Avg cost per hour: ${el.price}</p>
                            <div>
                                <label>Choose Date and Time</label><br></br><br></br>
                                <input type="datetime-local" onChange={(e)=>setdate(e.target.value)} required/>
                            </div><br></br>
                            <div>
                            <button type="button" onClick={()=>passdetails(location.state.cus_uname,location.state.prof_uname,el.cmp_name,el.service,el.price)} className="btn btn-primary"  data-toggle="modal" data-target="#myModal" style={{color:"blueviolet",border:"1px solid blueviolet",backgroundColor:"white"}}>Book Now &rarr;</button>
                            <ToastContainer />
                            {/* <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog">
                                    <div className="card" id="popcard">
                                        <div className="text-right cross" id="cross"> <i className="fa fa-times"></i> </div>
                                        <div className="card-body text-center" id="card-body"> <img src="https://img.icons8.com/bubbles/200/000000/trophy.png"/>
                                            <h4 style={{marginTop:"18px"}}>CONGRATULATIONS!</h4>
                                            <p style={{fontSize:"14px"}}>You have been personally selected to take part in our 2017 annual visitors survey!</p> <button className="btn btn-out btn-square continue">CONTINUE</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
        </div>
            )
        }):
        <></>
    }
    </div>
    )


}
