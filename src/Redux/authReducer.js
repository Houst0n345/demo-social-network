import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_AUTH = './auth/SET_AUTH';
const SET_CAPTCHA = './auth/SET_CAPTCHA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {
                ...state,
                ...action.data

            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha

            }
        }
        default:
            return state;
    }
};


export const setAuth = (id, email, login, isAuth) => ({type: SET_AUTH, data: {id, email, login, isAuth}});
export const setCaptcha = (data) => ({type: SET_CAPTCHA, captcha: data["url"]});

export const getAuthThunk = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuth(id, email, login, true));
    }
};
//{"url":"https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=tWCUp5QO%2FyDwPKr1j%2BmUPA%3D%3D"}
export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthThunk())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }

        dispatch(stopSubmit('login',
            (response.data.messages.length > 0)
                ? {_error: response.data.messages[0]}
                : {_error: 'Some error'}
        ))
    }
};

// Запрос капчи если приходит код ответв 10
export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    dispatch(setCaptcha(response.data));

};

export const logout = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logout(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(setAuth(null, null, null, false))
    }
};

export default authReducer;