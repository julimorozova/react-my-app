import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs' render={() => <DialogsContainer
                        /*dialogs={props.state.dialogsPage.dialogsData}
                        messages={props.state.dialogsPage.messagesData}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        dispatch={props.dispatch}*/
                        store={props.store}
                    />}
                    />
                    <Route path='/profile' render={() => <Profile
                        store={props.store}/> }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
