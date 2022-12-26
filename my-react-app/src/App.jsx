import { useState , createContext} from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";

export const AppContext = createContext(); 


function App() {

  const [username,setUsername]=useState("Emrullah")


  return (
    <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
        {/* alttaki her element yukarıdaki value ya erişebilir */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
