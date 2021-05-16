import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {titile: 'My new website', body: 'Lorem ipsum...', author: 'miyushan', id: 1},
        {titile: 'Welcome party!', body: 'Lorem ipsum...', author: 'shakeer', id: 2},
        {titile: 'Web dev top tips', body: 'Lorem ipsum...', author: 'miyushan', id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        //preview the remaining array
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;