import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import About from './components/About';
import Help from './components/Help';
import Service from './components/Service';
import Search from './components/Search';
import Labour from './components/Labour';
import Plumber from './components/Plumber';
import Electrician from './components/Electrician';
import Barber from './components/Barber';
import Companylist from './components/Companylist';
import Login from './components/Login';
import Addprofession from "./components/Addprofession";
import Bookingpage from "./components/Bookingpage";
// import Viewhistory from "./components/Viewhistory";
import ViewCustomer from "./components/ViewCustomer"
import ViewProfessional from "./components/ViewProfessional"
import { UserContext } from './context/UserContext';

function App() {
  const {Person , setPerson}=useState({});
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Labour/:name" element={<Labour />} />
        <Route path='/Search/:name' element={<Search/>}/>
        <Route path='/Plumber' element={<Plumber/>}/>
        <Route path='/Electrician' element={<Electrician/>}/>
        <Route path='/Barber' element={<Barber/>}/>
        <Route path='/Companylist' element={<Companylist/>}/>
        <Route path='/Login' element={<Login/> }/>
        <Route path='/Addprofession' element={<Addprofession/>}/>
        <Route path='/Bookingpage' element={<Bookingpage/>}/>
        {/* <Route path='/Viewhistory' element={<Viewhistory/>}/> */}
        <Route path='/ViewCustomer' element={<ViewCustomer/>}/>
        <Route path='/ViewProfessional' element={<ViewProfessional/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;