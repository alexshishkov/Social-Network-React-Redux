import c from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {createRef} from "react/cjs/react.production.min";

const MyPosts = (props) => {

    let MessagesElement = props.state.map((m) => <Post messages = {m.messages} like = {m.like}/>);

    let AddPost = () => {
        alert(NewPostElement.current.value);
    };

    let NewPostElement = createRef();

    return (
        <div className={c.posts}>
            <p>My post</p>
            <textarea ref={NewPostElement}></textarea>
            <button onClick={AddPost}>Add Post</button>
            {MessagesElement}
        </div>)
    };

export default MyPosts;