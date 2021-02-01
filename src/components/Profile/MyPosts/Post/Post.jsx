import c from "./Post.module.css";
import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";


const Post = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div className={c.post}>
            <img src={props.profile.photos.small} alt="post ava"/>
            <div>
                {props.messages}
                <div>Like{props.like}</div>
            </div>
        </div>
    )
};

export default Post;