import s from './../Dialogs.module.scss';



const Message = (props) => {

    const setOwn = s.message + (props.own === 'my' ? (" " + s.my) : "");

    return (
        <div className={setOwn}>{props.message}</div>
    );
}

export default Message;