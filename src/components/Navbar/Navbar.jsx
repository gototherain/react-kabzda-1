import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';


const setActive = ({isActive}) => s.item + (isActive ? (" " + s.active) : "");

const Navbar = () => {
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
        </nav>

    );
}


export default Navbar;