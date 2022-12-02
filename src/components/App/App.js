import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Dialogs from '../Dialogs/Dialogs';
import Header from '../Header/Header';
import Music from '../Music/Music';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';



const App = (props) => {
  return (
    
      <section className="app-wrapper">
        <Header />
        <section className="app-wrapper-layout">

          <Navbar state={props.state.sidebar} />
          <section className="app-wrapper-content">
            <Routes>
              <Route path='/profile' element={<Profile profilePage={props.state.profilePage} updateNewPostText={props.updateNewPostText} addPost={props.addPost} />} />
              <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}  updatenewMessageText={props.updatenewMessageText} addMessage={props.addMessage} />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </section>
        </section>

      </section>

  );
}

export default App;
