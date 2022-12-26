import { useContext } from "react";
import {AppContext} from '../App'

function Home  () {
    const {username}=useContext(AppContext)
    return ( 
        <div>
            <h1>This is Home Page the user is: {username}</h1>
        </div>
     );
}
export default Home;