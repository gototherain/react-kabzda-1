import s from './Friends.module.scss';

let Friends = (props) => {


    return (

        <div className={s.item}>{props.name}</div>
    );
}

export default Friends;