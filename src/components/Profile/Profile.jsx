import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <section className={s.profile}>
            <ProfileInfo />
            <MyPosts />
        </section>
    );
}

export default Profile;