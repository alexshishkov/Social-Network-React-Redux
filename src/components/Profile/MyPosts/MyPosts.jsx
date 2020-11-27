import c from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.posts}>
            <p>My post</p>
            <input/>
            <button>Send</button>
            <Post messages = 'Hi how are you?' like = '3'/>
            <Post messages = 'Hi' like = '2'/>
        </div>)
    };

export default MyPosts;