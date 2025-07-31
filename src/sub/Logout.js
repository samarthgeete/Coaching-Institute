import { Navigate } from "react-router-dom";

function Logout(){

    localStorage.removeItem("Token")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("mobile")
    localStorage.removeItem("password")

    return(
        <>
          < Navigate to="/Login"/>
        </>
    );

}


export default Logout;