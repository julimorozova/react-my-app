import classes from './MyPosts.module.css'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator}
    from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*
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
}*/
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText))
        },
        onAddPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;