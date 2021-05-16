const BlogList = ({blogs, word}) => {

    // const blogs = props.blogs;
    // const word = props.word;

    return ( 
        <div className="blog-list">
            <h2>{word}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titile}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
    
export default BlogList;
