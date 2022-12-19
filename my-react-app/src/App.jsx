//sfc
import { useState } from "react";
import User from "./User";

function App() {
  const age = 15;
  const isGreen = true;

  // if(age>18){
  //   return <h1>Over Age</h1>
  // }else{
  //   return <h1>Under Age</h1>
  // }
  const names = ["John", "Bob", "Mary"];
  const users=[
    {name:"John",age:20},
    {name:"Bob",age:25},
    {name:"Mary",age:30},
    {name:"Emrullah",age:23}
  ]

  const planets=[
    {name:"Mars", isGasPlanet:false},
    {name:"Jupiter", isGasPlanet:true},
    {name:"Saturn", isGasPlanet:true},
    {name:"Earth", isGasPlanet:false},
    {name:"Venus", isGasPlanet:false},
    {name:"Mercury", isGasPlanet:false},
    {name:"Uranus", isGasPlanet:true},
    {name:"Neptune", isGasPlanet:true},
    {name:"Pluto", isGasPlanet:false}
  ]

  return (
    <div className="App">
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}> THIS HAS COLOR </h1>

      {/* map ile yazdırma işlemi */}

      {names.map((name, index) => {
        return <h1 key={index}> {index+1} -{name}</h1>;
      })}
      <hr />
      {users.map((user, index) => {
        return <h1 key={index}> {index+1} -{user.name} , {user.age}</h1>;
      })}
      <hr />
      {users.map((user, index) => {
        return <User key={index} number={index+1} name={user.name} age={user.age}  />;
      })}

      {/* Exercise */}
      <hr />
      {/* planets dizisinin her objesini dolaşıp isGasPlanet == true olanları map ile yazdırma */}
      {planets.filter(planet=>planet.isGasPlanet).map((planet,index)=>{
        return <h1 key={index}>{index+1} - {planet.name} is a gas planet</h1>
        })
      }
      {/* yada */}
      <hr />
      {planets.map((planet,index)=>{
       return planet.isGasPlanet && <h1 key={index}>{index} - {planet.name} is a gas planet</h1>
       } )
      }
    </div>
  );
}


// const User = (props) => {
//   return ( 
//     <h1>{props.index} - {props.name},{props.age}</h1>
//    );
// }
 
export default App;
