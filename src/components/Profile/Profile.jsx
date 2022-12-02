import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <section className={s.profile}>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost} />
        </section>
    );
}

export default Profile;