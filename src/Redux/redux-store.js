import {applyMiddleware, combineReducers, createStore} from 'redux';
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import messagesPageReducer from "./messagesPageReducer";
import appReducer from "./appReducer";
import {compose} from 'redux';
import newsPageReducer from "./newsPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    messagesPage: messagesPageReducer,
    app: appReducer,
    newsPage: newsPageReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));



window.__store__ = store;
export default store;
