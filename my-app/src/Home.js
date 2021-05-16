import { useState } from 'react';

const Home = () => {
    
    const [ name, setName] = useState('shakeer');
    const [ age, setAge] = useState(23);

    const handleClick = () => {
        setName('Miyushan');
        setAge(24);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;