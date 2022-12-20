//sfc
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [show,setShow]=useState(false)

  const [number, setNumber]=useState(0)

  return (
    <div className="App">
      <h1>Age: {age}</h1>
      <button onClick={increaseAge}>Increase Age</button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>{inputValue}</p>
      <hr />
      <button onClick={()=> setShow(!show)}>press to toggle it</button>
      {show && <h1 >Now You Can See </h1>}
      <h1 style={{color:show ?'green':'red'}}> {show.toString()} </h1>
      <hr />
      <p> {number} </p> <br />
      <button onClick={()=> setNumber(number+1)}>Arttır </button>
      <button onClick={()=> setNumber(number-1)} >Azalt </button>
      <button onClick={()=> setNumber(0)}> Sıfırla </button>
      
    </div>
  );
}

export default App;
