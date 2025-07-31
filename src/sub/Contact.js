import { useState ,  useEffect } from "react";
import { appurl } from "./appurl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Contact() {
   var Navigate=useNavigate();
     const[user,userdata]=useState([]);
     useEffect(()=>{
      

      axios.get(appurl+"/find").then((res)=>{
        userdata(res.data) 

      }).catch((err)=>{
        console.log(err);
      })
     },[])
     function handle(eid) {
     var obj = {"data":{"email":eid}};

    axios.delete(appurl+"/remove",obj).then((res)=>{
       alert("User has been succesfully deleted")
    }).catch((err)=>{
        alert("User has Not deleted")
    })
  }

  return (
    <>
  
    <table  className="table table-bordered" >
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
       
        <th>Password</th>
         <th>Mobile</th>
          <th>Action</th>
      </tr>
    
     { user.map((v)=>(
           <tr>
              <td>{v.user_id}</td>
               <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.age}</td>
                  <td>{v.password}</td>
                   <td>{v.mobile}</td>
   <td><button style={{"color":"red"}} onClick={()=>{ handle(v.email) }}>Delete</button></td>

           </tr>
     )) }
     </table>
     
    </>
  );

}

export default Contact;
