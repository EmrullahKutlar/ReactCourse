import {useSelector} from 'react-redux'
const Home = () => {
    const username = useSelector((state: any) => state.user.value.username)

    return (<div className="col-12">

         <p className="">burası home page user: {username} </p>
    </div>);
}

export default Home;