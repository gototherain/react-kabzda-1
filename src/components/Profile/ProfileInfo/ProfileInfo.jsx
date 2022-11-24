import s from './ProfileInfo.module.scss';
import topImage from './img/top-image.jpg';


const ProfileInfo = () => {
    return (
        <section className={s.profileInfo}>
            <div>
                <img src={topImage} alt="" />
            </div>
            <div>
                ava & description
            </div>
        </section>
    );
}

export default ProfileInfo;