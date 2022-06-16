import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import './edit.css'

export default function Edit({teachers}){

     const {id} =useParams()
     const [students,setStudent]=useState('')
     const [count,setCount]=useState(0)
     const navigate=useNavigate()

     const getStudentDetails=()=>{
         axios.get(`https://629ef6b78b939d3dc28b227c.mockapi.io/students/${id}`)
         .then((res)=>{
             setStudent(()=>setStudent(res.data))
         })
         .catch((err)=>{
             console.log(err)
         })
     }

     const handleChange=(e)=>{

          let name=e.target.name
          let value=e.target.value

          setStudent((prevState)=>({
              ...prevState,
             [name]:value

          }))
    }

    const handleSubmit=(event)=>
    {
        event.preventDefault()
        console.log(students)
        setCount(count+1)
        console.log(count)
       
    }

     const updateStudentDetails=()=>{
             axios.put(`https://629ef6b78b939d3dc28b227c.mockapi.io/students/${id}`,students)
             
             .then((res)=>{
                 console.log(res)
                 setTimeout(()=>{
                   navigate('/student')
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
            (students) ?
            
            <form className="update-form " onSubmit={handleSubmit} >
                <p className="text-danger fs-2"> Update Student</p>
                <input type='text' id='firstName'  name='firstName' className="edit-firstname" placeholder="First Name" value={students.firstName} onChange={handleChange}/>
                <input type='text' id='lastName' className="edit-lastname" name='lastName' placeholder="Last Name" value={students.lastName} onChange={handleChange}/>
                <input type='email' id='Email' name='email' placeholder="Email" value={students.email} onChange={handleChange}/>
                 <label id='courses'>Course</label>
                <select  name='course' id='course' value={students.course} onChange={handleChange}>
                   <option value='information technology'>Information Technology</option>
                   <option value='computer science engineering'>Computer Science Engineering</option>
                   <option value='computer science and system engineering'>Computer Science And System Engineering</option>
                   <option value='civil engineering'>Civil Engineering</option>
                   <option value='mechanical engineering'>Mechanical Engineering</option>
                </select>
                <label id='mentors'>Assign a mentor </label>
                <select name='mentor' id='mentor' value={students.mentor} onChange={handleChange}>
                  
                   {teachers.map((teacher) => (
                     <option value={teacher.id}>{teacher.id}</option>
                   ))}
                    
                </select>

                <button type='submit' id='update-student'  className="bg-danger">Update</button>
            </form>
           
           :' '
           }
        </div>

    )

        }
