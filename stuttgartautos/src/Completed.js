import { set } from "date-fns";
import React,{useState,useEffect} from "react";
import Book from "./Book";


export default function Completed(){
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/Stuttgart")
          .then((r) => r.json())
          .then((data) => {
            setCars(data)
           
          });
      }, []);

      const displayed =cars.map((car)=>{
        return(
            <div>
                 
                  <p>Name of Car-{car.Car}</p>
                  <p>Year of Manufature-{car.Year}</p>

            </div>
          
            
        )
        })
 return(
<div id="completed">
   
    <h4>These are the completed cars from our garage</h4>
{displayed}
</div>
    )
}