import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator}
    from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (newText) => {
        props.store.dispatch(updateNewPostTextActionCreator(newText));
    }

    return(
        <MyPosts updateNewPostText={onPostChange}
                 onAddPost={addPost}
                 posts={state.profilePage.postsData}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;