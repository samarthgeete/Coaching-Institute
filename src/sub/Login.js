import {useNavigate} from 'react-router-dom'
import './Login.css'
import axios from "axios";
import { useState } from "react";
import { appurl } from "./appurl.js";

function Login() {

  const navigate=useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [output, setoutput] = useState("");

  var obj = { "email": email, "password": password }
var handle = () => {
  axios.post(appurl + "/Login", obj)
    .then((res) => {
      const user = res.data.detail[0];
console.log(user);

      // Optional: store token or minimal info, if needed
      localStorage.setItem("Token", res.data.Token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("mobile", user.mobile);

      setoutput("User verified");
      setpassword("");
      setemail("");
      navigate('/');
    })
    .catch(() => {
      setoutput("Invalid password or email");
      // console.log("Login failed:", error);
    });
};


  return (
    <>

      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <h1>{output}</h1>
            <h3>Login Here !!! </h3>
            <div className="col-lg-12">
              <form id="contact-form">
                <div className="row">

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email </label>
                      <input type="text" name="email" value={email} onChange={e => setemail(e.target.value)} id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                    </fieldset>
                  </div>

                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Enter Password </label>
                      <input type="text" id="message" value={password} onChange={e => setpassword(e.target.value)} placeholder="Your password " />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="button" className="orange-button" onClick={handle} >Login here </button>
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
export default Login;