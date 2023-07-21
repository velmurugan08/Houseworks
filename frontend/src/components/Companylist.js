import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet,useNavigate} from "react-router-dom"
import { useParams } from "react-router"


export default function Companylist(props) {
  const navigate=useNavigate();
  const [details,setDetails] = useState(null);
  let{ service,location } = props;
  const [companylistData, setCompanylistData] = useState(null);
  
  // function validhandle(p_uname){
  //   const d = localStorage.getItem('user');
  //   alert(localStorage.getItem('user'))
  //   if(!d.data) {
  //     alert("You are not Logged IN! Login to Book:)");
  //     navigate('/Login');
  //   }
  //   else{
  //     setDetails(JSON.parse(d.data));
  //   }
  //   // details.data.name
  //   navigate('/Bookingpage',{state:{cus_name:details.data.name,cus_uname:details.data.uname,prof_uname:p_uname}})
  // }
  function validhandle(p_uname) {
    const d = localStorage.getItem('user');
    alert(localStorage.getItem('user'));
    
    if (!d) {
      alert("You are not logged in! Login to book :)");
      navigate('/Login');
    } else {
      const parsedData = JSON.parse(d);
      if (parsedData.data.role==="Professional") {
        alert("Professional account can't book service!");
        return; // or handle the error accordingly
      }
      setDetails(parsedData.data);
      navigate('/Bookingpage', {
        state: {
          cus_name: parsedData.data.name,
          cus_uname: parsedData.data.uname,
          prof_uname: p_uname
        }
      });
    }
  }
  useEffect(() => {
    fetchCompanylistData();
  }, [service,location]);

  const fetchCompanylistData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/job/"+location);
      console.log(response.data)
      setCompanylistData(response.data);
      
    } catch (error) {
      console.error("Error fetching professional data:", error);
    }
  };

  
  return (
    <div>
      {companylistData?companylistData.map((el) =>{

            return (
              el.service.includes(service)?
              <div className="card ms-7" style={{ margin: "20px auto",width:"70%" }} key={el.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src='https://img.freepik.com/premium-vector/home-service-logo-design-template_145155-2885.jpg' className="card-img" alt="company" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">{el.cmp_name}</h4>
                      <p className="card-text" style={{color:"gray"}}>{el.desp}</p>
                      <p className="card-text">{el.address}</p>
                      <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16" style={{marginRight:"20px"}}>
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>{el.location}
                        </p>
                      <p className="card-text"><b>Services:</b> {el.service.join(' ,')}</p>
                      <p className="card-text">Avg cost per hour: ${el.price}</p>
                      <p className="card-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16" style={{marginRight:"20px"}}>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                      {el.mobile}
                      </p> 
                      
                      <button type="button" class="btn btn-primary" onClick={()=>validhandle(el.prof_uname)}  style={{color:"blueviolet",border:"1px solid blueviolet",backgroundColor:"white"}}>Book Now &rarr;</button>
                      {/* <button className="btn btn-primary"><Link to={"/Update/"+el.id} style={{textDecoration:"none",color:"white"}}>Update</Link></button>
                      <button className="btn btn-primary" onClick={(ev) => {remove(el.id); ev.preventDefault();}}>Remove</button> */}
                    </div>
                  </div>
                </div>
              </div>:
              <></>    
            )
            
      }):
      <></>      
      }
    </div>
  );
  <Outlet/>
}