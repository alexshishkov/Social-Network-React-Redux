import React from 'react';
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo />
            <MyPosts state={props.state.post} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    )
};
export default Profile;