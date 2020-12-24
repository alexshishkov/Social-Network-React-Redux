import c from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {createRef} from "react/cjs/react.production.min";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reduser";

const MyPosts = (props) => {

    let MessagesElement = props.state.map((m) => <Post messages = {m.messages} like = {m.like}/>);

    let NewPostElement = createRef();

    let AddPost = () => {
        props.dispatch(addPostActionCreater());
    };

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreater(text));
    };

    return (
        <div className={c.posts}>
            <p>My post</p>
            <textarea ref={NewPostElement} onChange={onPostChange} value={props.newPostText}/>
            <button onClick={AddPost}>Add Post</button>
            {MessagesElement}
        </div>)
    };

export default MyPosts;