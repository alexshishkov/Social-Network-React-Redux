import c from "./Post.module.css";
import React from "react";


const Post = (props) => {
    return (
        <div className={c.post}>
            <img src="https://sun9-9.userapi.com/c858328/v858328526/50726/W5RrC2j_quI.jpg" alt="post ava"/>
            <div>
                {props.messages}
                <div>Like{props.like}</div>
            </div>
        </div>
    )
};

export default Post;