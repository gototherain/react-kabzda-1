import s from './Profile.module.scss';
import topImage from './img/top-image.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <section>
            <div>
                <img src={topImage} alt="" />
            </div>
            <div>
                ava & description
            </div>
            <MyPosts />
        </section>
    );
}

export default Profile;