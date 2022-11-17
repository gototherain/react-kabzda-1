import logo from './logo.svg';
import topImage from './top-image.jpg';
import './App.css';


const App = () => {
  return (
    <div className="wrapper">
      <header className='header'><img className='header__logo' src={logo} /></header>
      <nav className='nav'>
        <ul>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Messages</a></li>
          <li><a href='#'>News</a></li>
          <li><a href='#'>Music</a></li>
          <li><a href='#'>Settings</a></li>
        </ul>
      </nav>
      <div className='content'>
        <img src={topImage} />
      </div>
    </div>
  );
}

export default App;
