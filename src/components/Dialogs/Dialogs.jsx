import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messagesData
        .map(m => <Message message={m.message} own={m.own} />);

        let newMessageElement = React.createRef();

        let addMessage = () => {
            props.addMessage();
        }

        let onMessageChange = () => {
            let text = newMessageElement.current.value;
            props.updatenewMessageText(text);
        }

    return (
        <section className={s.dialogs}>

            <div class={s.dialogsItemsWrapper}>
                <ul className={s.dialogsItems}>
                    {dialogsElements}
                </ul>
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Dialogs;