import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/NavBar/Navbar"
import'./App.css'
import About from "./Components/About/About";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";










function App() {
  return (
        
        <div className="app">
          <Navbar/> 
          
        <div className="sections">
          <Homepage/>  
          <About/>
          <Portfolio/>
          <Contact/>
        
        </div>
            

    </div>
  );
}

export default App;
