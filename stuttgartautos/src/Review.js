import React from "react";
import { useState } from "react";

export default Review(){

    const [Car , setCar] = useState("")
    const [Year , setYear] = useState("")
    const [Image , setImage] = useState("")

    function handleCar(event){
        setCar(event.target.value)
    }
    function handleYear(event){
        setYear(event.target.value)
    }
    function handleImage(event){
        setImage(event.target.value)
    }
    function Submit(e){
        e.preventDefault()

        if (Car===''){
            alert('car not added')
        }
        else if(Image===''){
            alert('image not added')
        }
        else if(Year===''){
            alert('year not added')
        }
        else{
            console.log(Car);
            const newCar={
                Car:Car,Year:Year,Image:Image

            }
            console.log(newCar);
            fetch("http://localhost:3000/Stuttgart",
            {
                method:'POST',
                headers:(
                    'content'
                )
            }
            )

            
        }

    }



    return(

        <div></div>
    )
}