import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid App">
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='*' element={<div > Page Not Found </div>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
