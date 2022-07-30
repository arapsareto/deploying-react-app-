import React from "react";
import pic1 from './image/benz.jpg';




export default function About(){

    return(
        
<div id="about">
  <img src={pic1} className='pic1'/>
<p className="p1"> We offer a complete range of automotive services from repairing slight bumper scrapes to handling large insurance claims. After many years serving our customers we pride ourselves in giving every case from small to large the upmost attention and care.</p>
</div>
    )
}