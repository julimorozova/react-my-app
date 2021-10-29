import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>).reverse()
    let newPostElement = React.createRef()
    const addPost = () => {
        props.onAddPost();
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);

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