import { Routes, Route } from 'react-router-dom'
import Home from './sub/Home.js';
import Register from './sub/Register.js'
import About from './sub/About.js'
import Courses from './sub/Courses.js'
import Contact from './sub/Contact.js'
import Header from './component/header.js'
import Footer from './component/footer.js'
import Login from './sub/Login.js'
import Logout from './sub/Logout.js'
import Edit from './sub/Edit.js';
import Uploadimg from './sub/Uploadimage.js';
import Gallary from './sub/Gallary.js';


function App() {
  return (
    <div>

      <Header />
      
      
        {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Courses" element={<Courses />}/>
        <Route path="/Contact" element={<Contact />}/> 
        <Route path="/Login" element={<Login />}/> 
        <Route path="/Logout" element={<Logout />}/> 
        <Route path="/Update" element={<Edit Profile />}/> 
        <Route path="/UploadImg" element={<Uploadimg />}/> 
        <Route path="/Gallary" element={<Gallary />}/> 

      </Routes>
      <Footer />
    </div>
  );
}
export default App;


