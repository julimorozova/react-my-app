import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active} className={classes.link} >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={classes.link} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active} className={classes.link}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active} className={classes.link}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/setting" activeClassName={classes.active} className={classes.link}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;