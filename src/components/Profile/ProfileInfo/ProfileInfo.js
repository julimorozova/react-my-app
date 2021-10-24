import classes from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.bg}> </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatar}>
                    <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg" alt=""/>
                </div>

                <div className={classes.userInfo}>

                </div>
            </div>

        </div>

    )
}

export default ProfileInfo;