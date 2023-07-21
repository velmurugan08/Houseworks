import { useState } from "react";
import { useParams } from "react-router"
import { Link, Outlet} from "react-router-dom"
import Companylist from "./Companylist";

export default function Search(){
    let { name } = useParams();
    
    // let service=document.getElementById("searchTerm").value
    const [service,setService] = useState(null);
    const [answer,setAnswer] = useState(null);
    const [istrue,setIstrue] = useState(false);
    const [location,setLocation] = useState(null);

    function handleChange(e){
        e.preventDefault();
        setIstrue(false);
        console.log(e.target.value);
        setService(e.target.value);
    }
    function handleClick(e){
        e.preventDefault();
        setIstrue(true);
        setAnswer(service);
    }
    console.log(name)
    return <div>
        <h1 className="ser">{name}</h1>
        <p style={{textAlign:"center"}}>Home services, on demand.</p>
        <form className="search">
            <select id="searchTerm1" name="place" onChange={(e)=>setLocation(e.target.value)} form="selectplaceform">
                <option value="Select-city">Select-city</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Trichy">Trichy</option>
                <option value="Pondicherry">Pondicherry</option>
            </select>
            <input type="text" id="searchTerm" onChange={handleChange} placeholder="Search for services eg. basin repair" required/>
            <button type="submit" id="searchButton" onClick={handleClick}>
              {/* <Link to={'/Companylist/'+service} style={{color:"color",textDecoration:"none"}}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
           </button>
          </form>
          {istrue ? <Companylist service={answer} location={location}/>  :""}
            {/* <div id="wrap">
			<div className="search">
				<input type="text" id="searchTerm" placeholder="What are you looking for?" />
				<button type="submit" id="searchButton">
			</button>
			</div>
		    </div> */}
            <Outlet/>
    </div>
}