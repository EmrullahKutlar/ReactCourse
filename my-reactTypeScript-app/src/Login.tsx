import React , { useState } from "react";
import { login, logout } from "./store";
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const [newUsername, setNewUsername] = useState<string>("")
    const dispatch = useDispatch()
    const username = useSelector((state: any) => state.user.value.username)

    return (<div className="col-12 mt-5">
        <div className="row justify-content-center">
            <p> {username} </p>
            <div className="col-6">
                    <div className="d-flex input-group">
                        <input type="text" className="form-control" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewUsername(e.target.value)} />
                        <button type="submit" className="btn btn-success  input-group form-control"
                            onClick={() => dispatch(login({ username: newUsername }))}>Submit</button>
                        <button  className="btn btn-danger  input-group form-control"
                            onClick={() => dispatch(logout())}>Logout</button>
                    </div>
            </div>
        </div>
    </div>);
}

export default Login;