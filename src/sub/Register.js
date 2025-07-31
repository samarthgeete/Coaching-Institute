import './Register.css'

import { useState } from 'react';

import axios from 'axios';

import { appurl } from './appurl.js'


function Register() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");


  const [output, setoutput] = useState();

  const obj = { "name": name, "email": email, "mobile": mobile, "password": password };

  const handle = () => {
    
    axios.post(appurl+"/register",obj).then((res) => {
      console.log(res)
      setname("");
      setpassword("");
      setmobile("");
      setemail("");
      setoutput("Register successfully ");
    }).catch((err) => {
      console.log(err);
    })
  }



  return (
    <div>

      <div className="col-md-10">
        <div className="right-content">
          <div className="top-content">
            <h6>Register your  account </h6>
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
                  
                  <input type="email" name="email" value={email} onChange={e => setemail(e.target.value)} placeholder="Your email..." required />


                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input type="number" name="number" value={mobile} onChange={e => setmobile(e.target.value)} placeholder="enter mob..."  required />

                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input type="password" name="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="Your password..." required />
               </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button type="button" className="orange-button" onClick={handle} >Register here </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
}

export default Register