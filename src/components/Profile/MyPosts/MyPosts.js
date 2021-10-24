import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()
    const addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return(
        <div className={classes.postsBlock}>
            <textarea name="" ref={newPostElement} cols="30" rows="2"></textarea>
            <button onClick={addPost}>Add post</button>
            { postsElements }
        </div>
    )
}

export default MyPosts;