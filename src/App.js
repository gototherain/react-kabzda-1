import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
  );
}

const Technologies = () => {
  return (
    <div>

      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>

    </div>
  );
}


export default App;
