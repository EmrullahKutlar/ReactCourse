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

// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
//     {
//       title: "Web dev top tips",
//       body: "lorem ipsum...",
//       author: "mario",
//       id: 3,
//     },
//   ]);
//   const [name, setName] = useState("mario");

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
//   };

//   useEffect(() => {
//     console.log("use effect ran");
//   }, [name]); // name değiştiğinde useEffect çalışır burası boş sürekli her renderda çalışır
//   return (
//     <div className="home">
//       <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
//       {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")}  handleDelete={handleDelete} title="Marios Blogs" /> */}
//       <p> {name} </p>
//       <button
//         onClick={() => {
//           setName("Emrullah");
//         }}
//       >
//         Change Name
//       </button>
//     </div>
//   );
// };
// export default Home;

import BlogList from "./BlogList";
import useFetch from "./../useFetch";


const Home = () => {
const {data:blogs,isPending,error} = useFetch('http://localhost:3001/blogs');




  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs"  />
      )}
    </div>
  );
};
export default Home;
