
import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';

function Auth() {

  var linking = useNavigate();

  var path = window.location.pathname

  useEffect(()=>{
  
    if (localStorage.getItem('Token')===undefined && path==="/Contact"  ){
      linking("/Login");  }


  })
           
  return (
     <>     
     </>  
     
   
   
   );

}

export default Auth;
