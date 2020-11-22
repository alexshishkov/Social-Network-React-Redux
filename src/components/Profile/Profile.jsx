import React from 'react';
import c from './Profile.module.css'

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
            <div className={c.posts}>
                <p>My post</p>
                <textarea></textarea>
                <button>Send</button>
                <div className={c.post}>
                    <img src="https://sun9-9.userapi.com/c858328/v858328526/50726/W5RrC2j_quI.jpg" alt="post ava"/>
                    <p>how are you?</p>
                </div>
            </div>
        </div>
    )
};
export default Profile;