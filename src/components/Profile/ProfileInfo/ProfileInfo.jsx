import React from 'react';
import c from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) =>{
    if (!props.profile){
      return <Preloader/>
    }
  return(
      <div className={c.logo_info}>
          <img src={props.profile.photos.large} alt="ава" className={c.logo_img}/>
          <div className={c.info}>
              <b>{props.profile.fullName}</b>
              <p>Date of birth: 16 june</p>
              <p>Education: yes</p>
              <p>Web site: {props.profile.contacts.facebook}</p>
          </div>
      </div>
  );
};

export default ProfileInfo;