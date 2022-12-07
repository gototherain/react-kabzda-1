import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(p => <Post message={p.message} likeCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    };

    let onPostChange = () => {

        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    };

    return (

        <section className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </section>




    );
}

export default MyPosts;