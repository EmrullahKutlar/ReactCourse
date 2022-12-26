import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({defaultOptions:{
      queries:{
        refetchOnWindowFocus:false 
        // sayfa degistirince refetch yapmasını onluyor.
        //Tutoriala bak 
      }
  }});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-12 mt-5 d-flex justify-content-center">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
