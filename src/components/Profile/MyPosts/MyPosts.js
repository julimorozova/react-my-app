import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()
    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText})
    }

    return(
        <div className={classes.postsBlock}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={addPost}>Add post</button>
            { postsElements }
        </div>
    )
}

export default MyPosts;