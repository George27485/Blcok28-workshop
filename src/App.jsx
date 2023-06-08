import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Blue from './component/Blue';
import Red from './component/Red';
import Home from './component/Home';
import Yellow from './component/yellow';
import Navbar from './component/ NavBar';
import MainContainer from './component/mainContainer';

function Footer(){
  return(
    <footer id="navfooter">
  <nav>
   
        <Link to="/blue">Blue</Link>
      
        <Link to="/red">Red</Link>
     
        <Link to="/Yellow">Yellow</Link>
     
         <Link to="/">Home</Link>
     
  </nav>
  </footer>
  );
}






function App() {
 

  return (
    
      <div id="container">
      
      <Navbar/>
      <MainContainer>
   <Routes>
     <Route path="/Blue" element={<Blue/>} />
     <Route path="/Red" element={<Red/>} />
     <Route path="/Yellow" element={<Yellow/>} />
   <Route path="/" element={<Home/>} />
   </Routes>
   </MainContainer>
   <Footer/>
</div>
    
  )
}

export default App
