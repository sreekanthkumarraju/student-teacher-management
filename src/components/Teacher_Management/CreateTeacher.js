import React, { useState } from "react";
import axios from 'axios'
import './create-teacher.css'
import { useNavigate } from "react-router-dom";

export default function CreateTeacher(){

   const [value,setValue]=useState(
       
       {
           firstName:"",
           lastName:"",
           email:"",
           date_of_join:'',
           salary:0,     
       }
    
   )

   

    const navigate=useNavigate()

    const handleChange=(event)=>{
      console.log(event)
       let name=event.target.name
       let value=event.target.value
     

        setValue((prevState)=>({
            ...prevState,
            [name]:value
        }))
       console.log(value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(value)
        axios.post('https://629ef6b78b939d3dc28b227c.mockapi.io/teachers',value)
        .then((resp)=>{
            console.log(resp)
            navigate('/teacher')
         
        })
        .catch((err)=>{
            console.log(err)
        })
       

    }

  
    return(

        <div>
            <p className="text-danger fs-2" >Create-Teacher</p>
            <form className="teacher-form" onSubmit={handleSubmit}>
                <label id='firstName' className="teacher-firstname-label">First Name</label>
                <input type='text' id='firstName' name="firstName" className="teacher-fname" value={value.firstName} onChange={handleChange}></input>

                <label id='lastName' className="teacher-lastname-label">Last Name</label>
                <input type='text' id='lastName' name='lastName' className="teacher-lname" value={value.lastName} onChange={handleChange}></input>

                 <label id='email' className="teacher-email-label">Email</label>
                 <input type='text' id='email' name='email' className="teacher-email" value={value.email} onChange={handleChange}></input>
   
                <label id='date_of_join' className="teacher-doj-label">Date of Join</label>
                <input type='date' id='date_of_join' name='date_of_join' className="teacher-doj" value={value.date_of_join} onChange={handleChange}></input>

                <label id='salary' className="teacher-salary-label">salary</label>
                <input type='number' id='salary' name='salary'  className="teacher-salary" value={value.salary} onChange={handleChange}></input>
              
             
                 <button type='submit' className="create-button bg-danger">Create</button>
            </form>
        </div>
   
   )
}