import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {
    return (
        <section className={s.dialogs}>

            <div class={s.dialogsItemsWrapper}>
                <ul className={s.dialogsItems}>
                    <li class={s.dialog}>
                        <NavLink to="/dialogs/1">Dick</NavLink>
                    </li>
                    <li class={s.dialog}>
                        <NavLink to="/dialogs/2">Rick</NavLink>
                    </li>
                    <li class={s.dialog}>
                        <NavLink to="/dialogs/3">Sick</NavLink>
                    </li>
                    <li class={s.dialog}>
                        <NavLink to="/dialogs/4">Wick</NavLink>
                    </li>
                </ul>
            </div>

            <div className={s.messages}>
                <div className={s.message}>So lock me and sock me up and throw away the key</div>
                <div className={s.message}>Go fuck yourself, you whoreson</div>
                <div className={s.message}>'Cause you're through fuckin' with me</div>
            </div>
        </section>
    );
}

export default Dialogs;