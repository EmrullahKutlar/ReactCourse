import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

const Navbar = () => {
    const [user] = useAuthState(auth)
    const signUserOut = async () => {
        await signOut(auth)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container">
                <Link to={'/'} className="navbar-brand"> Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link "> Login</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to={'/'} className="dropdown-item "> Home</Link>
                                </li>
                                <li>
                                    <Link to={'/'} className="dropdown-item "> Home</Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to={'/'} className="dropdown-item "> Home</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link disabled" tabIndex={-1} aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className='d-flex col-4 align-items-center' >
                        {user?.photoURL && <img src={user?.photoURL || ''} alt="" className='rounded-pill w-25 me-2' width={20} height={45} />}
                        {user?.displayName && <button className="btn btn-outline-success w-100" >{user?.displayName}</button>}
                        {user?.displayName && <button className="btn btn-outline-danger w-100" onClick={() => { signUserOut() }}>Logout</button>}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;