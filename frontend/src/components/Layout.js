import { useEffect, useState } from "react"
import { Link,Outlet, json, useNavigate } from "react-router-dom"

export default function Layout(){
    const [details,setDetails] = useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
      const d = localStorage.getItem('user');
      if(!details) setDetails(JSON.parse(d));
      // console.log(details.data)
    },[details])


    function validhandle() {
      const d = localStorage.getItem('user');
      
      if (!d) {
        alert("You are not logged in! Login as professional to access :)");
        navigate('/Login');
      } else {
        const parsedData = JSON.parse(d);
        if (parsedData.data.role==="Professional") {
          navigate('/Addprofession');
        }
        else{
          alert("You Can't Access this page! Have a Great Day :)");
        }
      }
    }
    function validhistory() {
      const d = localStorage.getItem('user');
      
    //   if (!d) {
    //     alert("You are not logged in! Login to access :)");
    //     navigate('/Login');
    //   } else {
    //     const parsedData = JSON.parse(d);
    //     navigate('/Viewhistory');
    //   }
    // }

    if (!d) {
      alert("You are not logged in! Login to access :)");
      navigate('/Login');
    } else {
      const parsedData = JSON.parse(d);
      if(parsedData.data.role==="customer")
         navigate('/ViewCustomer');
      if(parsedData.data.role==="Professional")
         navigate('/ViewProfessional');
    }
  }


    function handleLogout(e){
      e.preventDefault();
      localStorage.removeItem('user');
      navigate('/login');
      window.location.reload();
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
              <p className="navbar-brand fs-1 text-black"><b>House<span style={{color:"blueviolet"}}>Works.</span></b></p>
              <button className="navbar-toggler shadow-none color-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{color: "black"}}>
                <span className="navbar-toggler-icon">
                    <i class="bi bi-list" style={{color:"black"}}></i>
                </span>
              </button>
              <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header text-black border-bottom">
                  <h5 className="offcanvas-title fs-1" id="offcanvasNavbarLabel">Uber</h5>
                  <button type="button" className="btn-close btn-close-black shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                  <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                    <li className="nav-item">
                      <button className="nav-link mx-2 active text-black "  aria-current="page"><Link style={{textDecoration:"none",color:"black"}} to="/Home">Home</Link></button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link mx-2 text-black" ><Link style={{textDecoration:"none",color:"black"}} to="/About">About</Link></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link mx-2 text-black" ><Link style={{textDecoration:"none",color:"black"}} to="/Service">Service</Link></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link mx-2 text-black" ><Link style={{textDecoration:"none",color:"black"}} to="/Help">Help</Link></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link mx-2 text-black" onClick={()=>validhandle()}>Add Services</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link mx-2 text-black" onClick={validhistory}>View history</button>
                    </li>
                  </ul>
                  {
                    details?
                    <> <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <button className="text-black px-4 py-2 bg-white border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{marginRight:"10px"}}>
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                      {details.data.name}</button>
                    <button className="text-white px-4 py-2 rounded-5 border-0" style={{backgroundColor:"blueviolet"}} onClick={handleLogout}>Logout</button>
                  </div>
                    </>:
                    <> <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <button className="text-black px-4 py-2 bg-white border-0"><Link style={{textDecoration:"none",color:"black"}} to="/Login">{details?details.data.name:"Login"}</Link></button>
                    <button className="text-white px-4 py-2 rounded-5 border-0" style={{backgroundColor:"blueviolet"}}><Link style={{textDecoration:"none",color:"white"}} to="/Signup">Signup</Link></button>
                  </div>
                    </>
                  }
                  
                </div>
              </div>
            </div>
          </nav>
        <Outlet/>
        </div>
    )
}