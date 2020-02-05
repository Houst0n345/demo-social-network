import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { HashRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import style from './app.module.css';
//import MessagesContainer from "./components/Messages/MessagesContainer";
import {initializedThunk} from "./Redux/appReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader";
//import Friends from "./components/Friends/Friends";
import store from "./Redux/redux-store";

const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"));
const Friends = React.lazy(() => import("./components/Friends/Friends"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializedThunk();
    }

    render() {
        if (!this.props.initialized) {
            return  <Preloader/>
        }

        return (
            <div className="background-color">
                <div className="app-wrapper">
                    <div className="flex-container">
                        <HeaderContainer/>
                        <NavBar/>
                        <div className={style.content}>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/friends' render={() => {
                                return  <React.Suspense fallback={<div>Загрузка...</div>}>
                                    <Friends/>
                                </React.Suspense>
                            }}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/messages' render={() => {
                              return  <React.Suspense fallback={<div>Загрузка...</div>}>
                                    <MessagesContainer />
                                </React.Suspense>
                            }}/>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializedThunk}))(App);

const MainApp = () => {
  return  <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
};

export default MainApp;
