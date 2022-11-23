import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}><a href='#'>Profile</a></li>
                <li className={s.item}><a href='#'>Messages</a></li>
                <li className={`${s.item} ${s.active}`}><a href='#'>News</a></li>
                <li className={s.item}><a href='#'>Music</a></li>
                <li className={s.item}><a href='#'>Settings</a></li>
            </ul>
        </nav>

    );
}


export default Navbar;