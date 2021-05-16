import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {titile: 'My new website', body: 'Lorem ipsum...', author: 'miyushan', id: 1},
        {titile: 'Welcome party!', body: 'Lorem ipsum...', author: 'shakeer', id: 2},
        {titile: 'Web dev top tips', body: 'Lorem ipsum...', author: 'miyushan', id: 3}
    ])
    return (  
        <div className="home">
            <BlogList blogs={blogs} title="Blogs"/>
            <BlogList blogs={blogs.filter( (blog) => blog.author === 'miyushan')} title="Miyushan"/>
        </div>
    );
}
 
export default Home;