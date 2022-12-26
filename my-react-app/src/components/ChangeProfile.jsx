import { useState, useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
    const {setUsername}=useContext(AppContext)

    const [newUsername,setNewusername]=useState("")

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap input-group">
        <input type="text" className="form-control" onChange={ (e)=> setNewusername(e.target.value) } />
        <button className="btn btn-outline-success" onClick={()=>{setUsername(newUsername)}}> Change Username </button>
      </div></div>
    </div>
  );
};
