import React from "react";
import { Link } from "react-router-dom";


export default function Sidebar(){
    return(

        <div className="float-start border w-25   bg-primary text-white-50" style={{"height":"100vh","color":"red"}} >
              
           <ul class="nav flex-column ">
             
             
            
  
            <Link to='/student'>
              <li class="nav-item">
                 <p class="text-white"  style={{"fontSize":"20px"}}>Student Management</p>
              </li>
             </Link>
  
            <Link to='/teacher'>
             <li class="nav-item">
                 <p class="text-white"  style={{"fontSize":"20px"}}>Teacher Management</p>
              </li>
            </Link>  
             
           </ul>
        </div>
    )
}