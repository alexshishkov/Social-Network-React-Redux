import c from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.posts}>
            <p>My post</p>
            <textarea></textarea>
            <button>Send</button>
           <Post/>
        </div>)
    };

export default MyPosts;