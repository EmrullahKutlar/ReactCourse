import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
const [name,setName]=useState("")

const [person,setPerson]=useState({})

const fetchPerson=(name)=>{
  axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
    setPerson({...res.data})
  })

}

useEffect(()=>{
  // 2 kez calısmamasi icin main.jsx deki strictmode u kapattım
  fetchCatFact()
},[])


  return (
    <div className="App">
      <div className="container mt-5  d-flex justify-content-center align-items-center min-vh-100 flex-column">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-outline-primary" onClick={()=>fetchCatFact()}>
              Generate Cat Fact
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 ">
            <ul className="list-group">
              <li className="list-group-item">
               {catFact}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 d-flex input-group " >
            <input type="text" className="form-control" value={name}   onChange={(e)=>{
              setName(e.target.value)
            }}/>
            <button className="btn btn-outline-warning" onClick={()=>{fetchPerson(name)}} > Search</button>
          </div>
          <div className="col-12 mt-5">
            <p>Name: {person?.name}</p>
            <p>Age: {person?.age}</p>
            <p>Count: {person?.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
