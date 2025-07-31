import axios from "axios";
import {  useState } from "react";
import {  Imgurl} from "./appurl.js";
// import { useNavigate } from 'react-router-dom'

function Uploadimg() {

    const [price,setprice]=useState()
     const [file,setfile]=useState()

    var handle=(e)=>{
      
       setfile(e.target.files[0]); 
    }
     var hfile=()=>{
       
      var fom = new FormData();

      fom.append("Price",price);
      fom.append("Image",file);

      const config = {'content-type':'multipart-formdata'}

        axios.post(Imgurl+"/insert",fom,config)
  .then((res) => {
    console.log('Upload successful:', res.data);
  })
  .catch((error) => {
    console.log(error);
    // Show user-friendly message or retry logic
  });

    }
 
   
  return (
     <>

      <div className="contact-page section">
    <div className="container">
      <div className="row">
        {/* <h1></h1> */}
        <h3>Upload Your Image  Here !!! </h3>
        <div className="col-lg-12">
          <form id="contact-form" >
            <div className="row">
            
              <div className="col-lg-12">
                <fieldset>
                  <label >Price </label>
                  <input type="number"  id="email" value={price} onChange={e=>setprice(e.target.value)} placeholder="Your Price .." />
                </fieldset>
              </div>
            
              <div className="col-lg-12">
              
                  <label >Upload Profile </label>

                  <input type="file"  onChange={handle}/>
               
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="button" className="orange-button" onClick={hfile}  >Upload Profile  here </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  </div>

     </>  
     
   
   
   );

}

export default Uploadimg;
