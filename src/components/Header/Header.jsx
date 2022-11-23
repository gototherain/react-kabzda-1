import s from './Header.module.css';
import logo from './img/logo.svg';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="" />
        </header>
    );
}

export default Header;