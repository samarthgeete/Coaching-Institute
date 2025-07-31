import { useState, useEffect } from "react"
import { Imgurl } from "./appurl"
import axios from 'axios'
import './Gallary.css'


function Gallary(){
    const [pic, setpic]= useState([]);
    useEffect(()=>{
        axios.get(Imgurl+'/find').then((res)=>{
            setpic(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <>
        
              <div class="properties section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-8">
          <div class="section-heading text-center">
            <h6>| Images</h6>
            <h2>We Provide The Best  Environment of Study</h2>
          </div>
        </div>
      </div>
      <div class="row">

        {
            pic.map((val)=>(

      <div class="col-lg-10 col-md-10">
          <div class="item">
            <a href="property-details.html"><img src={`assets/Upload/${val.picture}`} width="350px" height={260}/></a>
            <span class="category">Price </span>
            <h6>{val.Price}</h6>
            <h4><a href="property-details.html"></a></h4>
            
            <div class="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>

            ))


        }

      

      </div>
    </div>
  </div>
    


        </>
    )
}


export default Gallary

