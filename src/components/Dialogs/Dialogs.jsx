import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <li class={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
}

const Message =(props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <section className={s.dialogs}>

            <div class={s.dialogsItemsWrapper}>
                <ul className={s.dialogsItems}>
                    <DialogItem name="Dick" id="1" />
                    <DialogItem name="Rick" id="2" />
                    <DialogItem name="Sick" id="3" />
                    <DialogItem name="Wick" id="4" />
                </ul>
            </div>

            <div className={s.messages}>
                <Message message="So lock me and sock me up and throw away the key" />
                <Message message="Go fuck yourself, you whoreson" />
                <Message message="Cause you're through fuckin' with me" />
            </div>
        </section>
    );
}

export default Dialogs;