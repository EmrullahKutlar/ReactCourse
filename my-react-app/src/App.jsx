//sfc
import { useState } from "react";

function App() {
  const name = "Emrullah";
  const age = 30;
  const email = "emrullah.ktlr@gmail.com";
  const name2 = <h1>Emrullah</h1>;
  const age2 = <h2>30</h2>;
  const email2 = <h3> emrullah.ktlr@gmail.com </h3>;
  const user = (
    <div>
      {name2}
      {age2}
      {email2}
    </div>
  );

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Email: {email}</h3>
      <hr />
      {user}
      <hr />
      <h1>Component</h1>
      <User />
      <User2  name='Hasan' age={25} email='hasan@gmail.com'/>

    </div>
  );
}

const User = () => {
  return (
    <div>
     <h1>Hello Emrullah</h1>
      <h2>Age: 23</h2>
      <h3>Email: emrullah.ktlr@gmail.com</h3>
    </div>
  );
};
const User2 = (props) => {
  return (
    <div>
     <h1>Hello {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  );
};

export default App;
