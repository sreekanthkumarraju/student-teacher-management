import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import './edit-Teacher.css'

export default function EditTeacher(){

     const {id} =useParams()
     const [teachers,setTeacher]=useState('')
     const [count,setCount]=useState(0)
     const navigate=useNavigate()

     const getStudentDetails=()=>{
         axios.get(`https://629ef6b78b939d3dc28b227c.mockapi.io/teachers/${id}`)
         .then((res)=>{
             setTeacher(()=>setTeacher(res.data))
         })
         .catch((err)=>{
             console.log(err)
         })
     }

     const handleChange=(e)=>{

          let name=e.target.name
          let value=e.target.value

          setTeacher((prevState)=>({
              ...prevState,
             [name]:value

          }))
    }

    const handleSubmit=(event)=>
    {
        event.preventDefault()
        console.log(teachers)
        setCount(count+1)
        console.log(count)
       
    }

     const updateStudentDetails=()=>{
             axios.put(`https://629ef6b78b939d3dc28b227c.mockapi.io/teachers/${id}`,teachers)
             
             .then((res)=>{
                 console.log(res)
                 setTimeout(()=>{
                   navigate('/teacher')
                 },[2000])

             })
             .catch((err)=>{
                 console.log(err)
             })
     
     
            }  

     useEffect(()=>{
        getStudentDetails()   
        
     },[])
     
     useEffect(()=>{
         if(count>0)
         {
        updateStudentDetails()
        console.log(count)
         }       
     },[(count)])

   

    return(

        <div>
            {
            (teachers) ?
            
            <form  className='edit-teacher' onSubmit={handleSubmit}>
                <input type='text' id='firstName'  name='firstName'className="edit-teacher-fname" placeholder="First Name" value={teachers.firstName} onChange={handleChange}/>
                <input type='text' id='lastName' name='lastName' className="edit-teacher-lname" placeholder="Last Name" value={teachers.lastName} onChange={handleChange}/>
                <input type='email' id='mail' name='email' className="edit-teacher-email" placeholder="Email" value={teachers.email} onChange={handleChange}/>
                <input type='date' id='date_of_join' className="edit-teacher-doj" name='date_of_join' value={teachers.date_of_join} onChange={handleChange}></input>

                <input type='number' id='salary' className="edit-teacher-salary" name='salary' value={teachers.salary} onChange={handleChange}></input>

                <button type='submit' className="edit-teacher-button bg-danger">Update</button>
            </form>
           
           :' '
           }
        </div>

    )

        }
