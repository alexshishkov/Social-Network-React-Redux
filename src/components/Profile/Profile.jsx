import React from 'react';
import c from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer store={props.store} profile = {props.profile} />
        </div>
    )
};
export default Profile;