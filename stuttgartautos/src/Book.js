import React from "react";
// import {image1} from'./images/interior.jpg';
import {Form,FormGroup,Label} from 'reactstrap';
export default function Book(){

    return(
<div id="book">
    <h3>Need Facebeat,full body repair, or scheduled serivice?Give us a poke</h3>
 <div id="form">
 <Form >
    <FormGroup>
        <label>Your name</label>
        <input type='text'  name='name' placeholder='enter your name'></input>
    </FormGroup>
    {/* <FormGroup>
        <label>email address</label>
        <input type='email'  name='email' placeholder='email address'></input>
    </FormGroup> */}
    <FormGroup>
        <label>Phone</label>
        <input type='text'  name='name' placeholder='phone number'></input>
    </FormGroup>
    <FormGroup>
        <label>Benz model</label>
        
        <select>
            <option value='e class'>E class</option>
            <option  value='c class'>C class</option>
            <option value='s class'>S class</option>
            <option value='G '>G wagon</option>
        </select>
    </FormGroup>
    <FormGroup>
        <label>Subject</label>
        <input type='text'  name='name' placeholder='subject'></input>
    </FormGroup>
    
    <button>Submit request</button>
 </Form>
 </div>
    
</div>
    )
}