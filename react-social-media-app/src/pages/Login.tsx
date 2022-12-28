import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result);
        navigate('/')
    };
    return (
        <div className='col-12 d-flex justify-content-center'>
            <button className="btn btn-outline-secondary" onClick={() => { signInWithGoogle() }}><span><i className="bi bi-google me-2"></i></span> Sign in With Google</button>
        </div>
    );
}

export default Login;