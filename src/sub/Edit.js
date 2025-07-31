import axios from 'axios'
import {useEffect, useState} from "react"
import { appurl } from './appurl'

function Edit(){
        
    const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
 const [output, setoutput] = useState();
 const [user, userdata] = useState([]);
  const obj = { "name": name, "email": email, "mobile": mobile, "password": password };

  useEffect(()=>{

    axios.get(appurl+"/fetch?email="+localStorage.getItem('email')).then((res)=>{
        userdata(res.data[0]);
        console.log(res.data)
        console.log("hy")
        var obj=res.data[0];
       setname(obj.name);
       setemail(obj.email);
       setmobile(obj.mobile);
       setpassword(obj.password);
    }).catch((err)=>{
        console.log(err);
    })

  },[])
     
   var handle=()=>{
        
    var detail= {"conclusion":{'email':email},"statement":obj}
      axios.patch(appurl+"/update",detail).then((res)=>{
        setoutput('Your profile has been updated')
      }).catch((err)=>{
        setoutput('Your profile has not been updated')
      })


   }
return(
<>

      <div className="col-md-10">
        <div className="right-content">
          <div className="top-content">
            <h6>Edit Your Profile </h6>
          </div>
          <h1>{output}</h1>
          
          <form id="contact">
            <div className="row">
              <div className="col-md-12">
                <fieldset>
                  <input type="text" name="name" value={name} onChange={e => setname(e.target.value)} placeholder="Your Name..."  required />

                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  {/* <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" */}
                  <input type="email" name="email" value={email} onChange={e => setemail(e.target.value)} placeholder="Your email..." required />


                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  {/* <input name="phone-number" type="text" className="form-control" id="phone-number" */}
                  {/* placeholder="Your Phone Number" required=""></input> */}
                  <input type="number" name="number" value={mobile} onChange={e => setmobile(e.target.value)} placeholder="enter mob..."  required />

                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  {/* <input name="city" type="text" className="form-control" id="city" */}
                  {/* placeholder="enter your city" required=""></input> */}
                  <input type="password" name="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="Your password..." required />

                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  {/* <button type="submit" id="form-submit" className="button">Get it now</button> */}
                  <button type="button" className="orange-button" onClick={handle} >Update here </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
</>
)

}
export default Edit