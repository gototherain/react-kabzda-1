import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {

    return (

        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={s.posts}>
                <Post message="Buenos dias!" likeCount="20" />
                <Post message="Buenos Aires!" likeCount="0" />
                <Post message="Valar Morghulis" likeCount="10" />
            </div>
        </div>




    );
}

export default MyPosts;