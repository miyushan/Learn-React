import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name:'miyushan', age:23};

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person.age}</p>
      </div>
    </div>
  );
}

export default App;
