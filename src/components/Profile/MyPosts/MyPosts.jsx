import c from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {createRef} from "react/cjs/react.production.min";

const MyPosts = (props) => {

    let MessagesElement = props.state.profile.post.map((m) => <Post messages = {m.messages} like = {m.like}/>);

    let NewPostElement = createRef();

    let AddPost = () => {
        props.AddPost();
    };

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={c.posts}>
            <p>My post</p>
            <textarea placeholder='Enter your post' ref={NewPostElement} onChange={onPostChange} value={props.state.profile.newPostText}/>
            <button onClick={AddPost}>Add Post</button>
            {MessagesElement}
        </div>)
    };

export default MyPosts;