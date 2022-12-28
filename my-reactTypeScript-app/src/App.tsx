import { Person, Country } from "./Person"
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Contact from "./Contact"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {

  // const getAge = (name: string): number => {
  //   return 21 // sadece number donebilir
  // }

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/contact'}>Contact</Link>
          <div className="contianer">
            <div className="row">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    </div>
  )
}

export default App
