import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import './components/Nav.css';
import Home from './components/Home'
import Mid from './components/Mid';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Mid/>
      <Image/>
    </div>
  );
}

export default App;
