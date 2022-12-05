
const BlogList = (props) => { // yada ({blogs, title}) şeklinde de yazılabilir
    const blogs= props.blogs
    return (
      <div className="blog-List">
        <h2> {props.title} </h2>

        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
              <h2> {blog.title} </h2>
              <p> Written by - {blog.author} </p>
          </div>
        ))}
      </div>
    );
  };
  export default BlogList;
  