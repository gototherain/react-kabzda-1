import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.scss';


const setActive = ({ isActive }) => s.item + (isActive ? (" " + s.active) : "");

const Navbar = (props) => {

    let friendsElements = props.state.friendsData
        .map(m => <Friends id={m.id} name={m.name} />);

    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to='/profile' className={setActive}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className={setActive}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music' className={setActive}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={setActive}>Settings</NavLink>
                </li>
            </ul>

            <div className={s.friends}>
                <h3>Friends:</h3>
                <div className={s.items}>
                    {friendsElements}
                </div>

            </div>
        </nav>

    );
}


export default Navbar;