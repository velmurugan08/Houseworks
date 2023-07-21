import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Viewhistory(){

    const [bookinglistData, setbookinglistData] = useState(null);
    const d = localStorage.getItem('user');
    const parsedData = JSON.parse(d);
    useEffect(()=>{
        if(!bookinglistData) {fetchp();fetch1();}
    
    },[bookinglistData]);

    async function fetchp(){
    const response = await axios.get("http://localhost:8081/booking/professional/"+parsedData.data.uname);
    console.log("2",response.data)
    
    setbookinglistData(response.data )
    console.log("fetch working")
    }
    async function fetch1 (){
        const response = await axios.get("http://localhost:8081/booking/customer/"+parsedData.data.uname);
        console.log("1",response.data)
       if(bookinglistData && bookinglistData.length === 0){
        setbookinglistData(response.data )
        }
        // else{
        //     setbookinglistData(response.data)
        // }
        console.log("fetch1 working")
    }
    console.log(bookinglistData)
    if (parsedData.data.role==="Professional") {

       
        return <div>
            <h1 style={{textAlign:"center",color:"white"}}><b>Your History</b></h1>
        {bookinglistData?bookinglistData.map((el) =>{
        return (
            <div>
                <section  style={{backgroundColor:"#5f59f7"}}>
            <div className="container py-5 ">
                <div className="row d-flex justify-content-center  h-100">
                <div className="col col-xl-10">
                    <div className="card mb-5" style={{borderRadius:"15px"}}>
                    <div className="card-body p-4">
                        <h2 className="mb-3">{el.cus_uname}</h2>
                        <p className="small mb-0"><i className="far fa-star fa-lg"></i> <span className="mx-2">|</span> Booked
                        <strong> {el.service.join(',')}</strong> on {el.timedate}</p>
                        <hr className="my-4"/>
                        <div className="d-flex justify-content-start align-items-center">
                        <p className="mb-0"><i className="fas fa-cog me-2"></i> <span
                            className="text-muted small">settings</span>
                            <span className="ms-3 me-4">|</span></p>
                        <p className="mb-0"><i className="fas fa-link ms-4 me-2"></i> <span
                            className="text-muted small">Book again</span></p>
                        <p className="mb-0"><i className="fas fa-ellipsis-h ms-4 me-2"></i> <span
                            className="text-muted small">Rating</span>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
            </div>
        )
        }):<></>}
    </div>

    }
    else{
        
        return <div><hr></hr>
            <h1 style={{textAlign:"center",color:"black"}}><b>Your History</b></h1><br></br>
                {bookinglistData?bookinglistData.map((el) =>{
                return (
                    <div>
                        <section  style={{backgroundColor:"#5f59f7"}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center  h-100">
                        <div className="col col-xl-10">
                        
                            <div className="card mb-5" style={{borderRadius:"15px"}}>
                            <div className="card-body p-4">
                                <h2 className="mb-3">{el.cmp_name}</h2>
                                <p className="small mb-0"><i className="far fa-star fa-lg"></i> <span className="mx-2">|</span> Booked
                                <strong> {el.service.join(',')}</strong> on {el.timedate}</p>
                                <hr className="my-4"/>
                                <div className="d-flex justify-content-start align-items-center">
                                <p className="mb-0"><i className="fas fa-cog me-2"></i> <span
                                    className="text-muted small">settings</span>
                                    <span className="ms-3 me-4">|</span></p>
                                <p className="mb-0"><i className="fas fa-link ms-4 me-2"></i> <span
                                    className="text-muted small">Book again</span></p>
                                <p className="mb-0"><i className="fas fa-ellipsis-h ms-4 me-2"></i> <span
                                    className="text-muted small">Rating</span>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                    </div>
                )
                }):<></>}
            </div>
    
      
            // if (!d) {
            //     alert("You are not logged in! Login to access :)");
            // } 
            // else {
            //     const parsedData = JSON.parse(d);
                
                
                
            // }
          
          
        

    }
}