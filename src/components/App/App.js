import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dialogs from '../Dialogs/Dialogs';
import Header from '../Header/Header';
import Music from '../Music/Music';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';



const App = () => {
  return (
    <BrowserRouter>
      <section className="app-wrapper">
        <Header />
        <section className="app-wrapper-layout">

          <Navbar />
          <section className="app-wrapper-content">
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/dialogs/*' element={<Dialogs />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </section>
        </section>

      </section>
    </BrowserRouter>

  );
}

export default App;
