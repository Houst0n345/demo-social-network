import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_AUTH = './auth/SET_AUTH';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH: {

            return {
                ...state,
                ...action.data

            }
        }
        default:
            return state;
    }
};


export const setAuth = (id, email, login, isAuth) => ({type: SET_AUTH, data: {id, email, login, isAuth}});

export const getAuthThunk = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuth(id, email, login, true));
    }
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthThunk())
    } else {
        dispatch(stopSubmit('login',
            (response.data.messages.length > 0)
                ? {_error: response.data.messages[0]}
                : {_error: 'Some error'}
        ))
    }
};

export const logout = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logout(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(setAuth(null, null, null, false))
    }

};

export default authReducer;