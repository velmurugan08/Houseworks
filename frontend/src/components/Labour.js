import { Link,Outlet } from "react-router-dom";
import Content from "./Content";
import {useParams} from 'react-router-dom';

export default function Labour(){
    const {name} = useParams();
    var plumber=[{
		image:"basin.jpg",
		name:"BASIN & SINK",
		},
		{
		image:"watertank.jpg",
		name:"WATER TANK",
		},
		{
		image:"toilet.jpeg",
		name:"TOILET",
		},
        {
		image:"motor.jpg",
		name:"MOTOR",
		},
	]

    var electrician=[{
		image:"fan.jpg",
		name:"FAN & LIGHT",
		},
		{
		image:"appliance.jpg",
		name:"APPLIANCES",
		},
		{
		image:"basin.jpg",
		name:"INVERTER / STABILIZER",
		},
        {
		image:"basin.jpg",
		name:"WIRING",
		},
	]

    var barber=[{
		image:"basin.jpg",
		name:"MEN/KIDS HAIRCUT",
		},
		{
		image:"basin.jpg",
		name:"MASSAGE",
		},
		{
		image:"basin.jpg",
		name:"HAIR COLOUR",
		},
        {
		image:"basin.jpg",
		name:"SHAVE/BEARD GROOMING",
		},
	]

    var lists = [];
        if(name === 'plumber') lists=plumber;
        else if(name === 'electricians') lists = electrician;
        else if(name === 'roofers') lists = barber;
        
    return (
        <>
		
        <Content  list={lists}/>
        </>
        
      
    )
}