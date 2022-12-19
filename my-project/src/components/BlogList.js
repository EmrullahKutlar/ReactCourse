import { Link } from "react-router-dom";

const BlogList = (props) => {
  // yada ({blogs, title}) şeklinde de yazılabilir
  const blogs = props.blogs;

  // const deneme= (<p> Written By-  {blogs[1].author} </p>)
  
const getId=(id,e)=>{
  console.log("this is: ", id);
  console.log("e is: ", e);
}
  return (
    <div className="blog-List">
      <h2> {props.title} </h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title} </h2>
            <p> Written by - {blog.author} </p>
            {/* {deneme} */}
          </Link>
          <button id="butonId" onClick={(e)=> getId(blog.id , e.target.id)}> Click</button>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
