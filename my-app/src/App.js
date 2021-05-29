
import Navbar from'./Navbar';
import Home from './Home';
import PracticeUseState from './PracticeUseState';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <PracticeUseState />
      </div>
    </div>
  );
}

export default App;
