import s from './Profile.module.css';
import topImage from './img/top-image.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={topImage} alt="" />
            </div>
            <div>
                ava & description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;