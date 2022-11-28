import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messagesData
        .map(m => <Message message={m.message} own={m.own}/>);


    return (
        <section className={s.dialogs}>

            <div class={s.dialogsItemsWrapper}>
                <ul className={s.dialogsItems}>
                    {dialogsElements}
                </ul>
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </section>
    );
}

export default Dialogs;