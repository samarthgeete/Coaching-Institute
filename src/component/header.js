import './header.css'
import Auth from "../sub/Auth";
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Header() {
  var [nav, setnav] = useState(false);
  const Location=useLocation();

  useEffect(() => {

    if (localStorage.getItem("Token")) {
      setnav(
        
          <div id="nav">
            <header className="main-header clearfix" role="header">
              <div className="logo">
                <a href="#"><em>Tech Institute</em> </a>
              </div>
              <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>


              <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
              <nav id="menu" className="main-nav" role="navigation">
                <ul className="main-menu">
                  <li> <Link to="/">  Home</Link>  </li>
                  <li> <Link to="/About"> About us </Link>  </li>
                  <li><Link to="/Contact ">  Contact </Link> </li>
                  <li> <Link to="/Courses">  Courses  </Link> </li>
                  <li> <Link to="/Update">  Edit Profile  </Link> </li>
                  <li> <Link to="/UploadImg">  UploadImg  </Link> </li>
                  <li> <Link to="/Logout">  Logout  </Link> </li>


                </ul>
              </nav>
            </header>
          </div>
        
      )
    }

    else {
      setnav(
      <div id="nav">
        <header className="main-header clearfix" role="header">
          <div className="logo">
            <a href="#"><em>Tech Institute</em></a>
          </div>
          <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>


          <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
          <nav id="menu" className="main-nav" role="navigation">
            <ul className="main-menu">
              <li> <Link to="/">  Home</Link>  </li>
              <li> <Link to="/About"> About us </Link>  </li>
              <li><Link to="/Contact ">  contact </Link> </li>
              <li> <Link to="/register"> Register</Link> </li>
              <li> <Link to="/Courses">  Courses  </Link> </li>
              <li> <Link to="/Login">  Login  </Link> </li>
              <li> <Link to="/Gallary">  Gallary  </Link> </li>
            </ul>
          </nav>
        </header>
      </div>
      
      )
    }
  }, [Location])
  return (
    <>
    <Auth/>
      {nav}

    </>
  );
}

export default Header;

