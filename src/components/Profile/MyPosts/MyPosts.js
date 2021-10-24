import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    return(
        <div className={classes.postsBlock}>
            <textarea name="" id="" cols="30" rows="2"></textarea>
            <button>Add post</button>
            { postsElements }
        </div>
    )
}

export default MyPosts;