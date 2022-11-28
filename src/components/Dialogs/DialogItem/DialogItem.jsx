import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.scss';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <li class={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;