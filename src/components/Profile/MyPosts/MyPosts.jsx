import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {



    let postsElements = props.postsData
    .map (p => <Post message={p.message} likeCount={p.likesCount} />);

    return (

        <section className={s.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </section>




    );
}

export default MyPosts;