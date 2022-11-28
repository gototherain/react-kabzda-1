import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <section className={s.profile}>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData}/>
        </section>
    );
}

export default Profile;