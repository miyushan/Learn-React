import { useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {titile: 'My new website', body: 'Lorem ipsum...', author: 'miyushan', id: 1},
        {titile: 'Welcome party!', body: 'Lorem ipsum...', author: 'shakeer', id: 2},
        {titile: 'Web dev top tips', body: 'Lorem ipsum...', author: 'rodrigo', id: 3}
    ])
    return (  
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titile}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;