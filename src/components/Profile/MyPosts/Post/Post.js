import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img
                src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
                alt=""/>
            <span>{props.message}</span>
            <div>
                <span>{props.likesCount} like</span>
            </div>

        </div>
    )
}

export default Post;