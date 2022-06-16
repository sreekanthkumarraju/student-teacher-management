import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './create-student.css'

export default function CreateStudent({teachers}){

   const [value,setValue]=useState(
       
       {
           firstName:"",
           lastName:"",
           email:"",
           course:'choose',
           mentor:''
       
       }
    
   )
   console.log(teachers)

   const navigate=useNavigate()


    const options=[
        {
            label:"...Choose a course...",
            value:"choose"
        },
       
        {
            label:"Information Technology",
            value:"information technology"
        },
        {
            label:"Computer Science Engineering",
            value:"computer science engineering"
        },
        {
            label:"Computer Science and System Engineering",
            value:"computer science and system engineering"
        },
        {
            label:"Mechanical Engineering",
            value:"mechanical engineering"
        },
        {
            label:"Civil Engineering",
            value:"civil engineering"
        },

    ]

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
        axios.post('https://629ef6b78b939d3dc28b227c.mockapi.io/students',value)
        .then((resp)=>{
            console.log(resp)
            navigate('/student')
        })
        .catch((err)=>{
            console.log(err)
        })
       

    }

  
    return(

        <div>
            <p className="text-danger fs-2">Create Student</p>
            <form className="form-container" onSubmit={handleSubmit}>
            
                <label id='create-firstName'>First Name</label>
                <input type='text' id='firstName' name="firstName" className='student-fname' value={value.firstName} onChange={handleChange}></input>

                <label id='create-lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' className="student-lname" value={value.lastName} onChange={handleChange}></input>

                 <label id='create-email'>Email</label>
                 <input type='text' id='email' name='email' className='student-email' value={value.email} onChange={handleChange}></input>
   
                <label id='courses'>Courses</label>
               
                 <select name='course' id='course' value={value.option} onChange={handleChange}>
                  
                   {options.map((option) => (
                     <option value={option.value}>{option.label}</option>
                   ))}
                    
                </select>

                <label id='mentor'>Assign a mentor </label>
                <select name='mentor' id='mentor' value={value.option} onChange={handleChange}>
                  
                   {teachers.map((teacher) => (
                     <option value={teacher.id}>{teacher.id}</option>
                   ))}
                    
                </select>
                 <button type='submit' id='create-student' className="bg-danger">Create</button>
            </form>
        </div>
   
   )
}