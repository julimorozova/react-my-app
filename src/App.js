import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={props.state.dialogsPage.dialogsData}
                        messages={props.state.dialogsPage.messagesData}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText} />}
                    />
                    <Route path='/profile' render={() => <Profile
                        posts={props.state.profilePage.postsData}
                        newPostText={props.state.profilePage.newPostText}
                        dispatch={props.dispatch}/> }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
