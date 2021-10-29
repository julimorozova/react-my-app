import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return(
        <div >
            <ProfileInfo />
            <MyPostsContainer
                /*posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}*/
                store={props.store}
            />
        </div>
    );
}

export default Profile;