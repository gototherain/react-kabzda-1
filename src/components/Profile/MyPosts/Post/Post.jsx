import s from './Post.module.css';
import userPic from './img/userpic.png'

const Post = (props) => {
   
   
    return (

        <div className={s.item}>
            <img src={userPic} alt="" />

            {props.message}

            <div>
                {props.likeCount} likes
            </div>
        </div>

    );
}

export default Post;