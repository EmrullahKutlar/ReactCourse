// import { useState } from "react";

// const Home = () => {
//     const handleClick = () => {
//         console.log('hello, ninjas');
//     }
//     const handleClickAgain = (name) => {
//         console.log('hello ' + name);
//     }
//     const handleClickAgain2 = (name, e) => {
//         console.log('hello ' + name + '-', e);
//     }

//     // let name = 'mario'; // this is not reactive and will not update the DOM when changed
//     const [name,setName]=useState('mario'); // this is reactive and will update the DOM when changed
//     const [age,setAge]=useState(25); // this is reactive and will update the DOM when changed

//     return (
//         <div className="home">
//             <h2>Homepage</h2><br />
//             <hr />
//             <button onClick={handleClick}>Click Me</button><br />
//             <hr />
//             {/* <button onClick={handleClickAgain('mario')}>Click Me Again</button> */}
//             {/* bu kullanım doğru değil tıklamasak bile çalışıyor */}

//             <button onClick={()=>{handleClickAgain('Mario')}}> Click Me Again </button><br />
//             <hr />
//             {/* bu kullanım doğru */}
//             <button onClick={(e)=>handleClickAgain2('Robert', e)}> Click Me Again </button>
//             <br />
//             <hr />
//             <p>{name} </p>
//             {/* <button onClick={()=>{name='emrullah'; console.log(name)}}>change name to Emrullah</button> falsee */}
//             <button onClick={()=>{setName('Emrullah')}}>change name to Emrullah</button> {/* true */}
//             <p>{age} </p>
//             <button onClick={()=>{setAge(30)}}>change age to 30</button> {/* true */}
//         </div>
//     );
// }

// export default Home;

import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    }, 
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};
export default Home;
