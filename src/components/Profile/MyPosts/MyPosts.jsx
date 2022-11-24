import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {

    return (

        <section>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={s.posts}>
                <Post message="Buenos dias!" likeCount="20" />
                <Post message="Buenos Aires!" likeCount="0" />
                <Post message="Valar Morghulis" likeCount="10" />
            </div>
        </section>




    );
}

export default MyPosts;