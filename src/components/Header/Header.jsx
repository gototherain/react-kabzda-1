import s from './Header.module.scss';
import logo from './img/logo.svg';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
            <img src={logo} alt="" />
            </div>
        </header>
    );
}

export default Header;