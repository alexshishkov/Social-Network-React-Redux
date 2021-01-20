import React from 'react';
import c from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
};
export default Profile;