import React from 'react';
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={c.profile}>
            <div className={c.logo_info}>
                <img src="https://sun9-40.userapi.com/c846524/v846524924/1c2ff3/okyk5B513qY.jpg" alt="ава"
                     className={c.logo_img}/>
                <div className={c.info}>
                    <b>Aleksej Shichrov</b>
                    <p>Date of birth: 16 june</p>
                    <p>Education: yes</p>
                    <p>Web site: <a href={'https://tinyurl.com/aleksejmocny'}>YouTube</a></p>
                </div>
            </div>
            <MyPosts />
        </div>
    )
};
export default Profile;