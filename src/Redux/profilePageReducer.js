import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = './profile/ADD-POST';
const SET_USER_DATA = './profile/SET_USER_DATA';
const SET_STATUS = './profile/SET_PROFILE_STATUS';
const DELETE_POST = './profile/DELETE_POST';
const SET_IMG = './profile/SET_IMG';



const initialState = {
    userData: null,
    status: '',
    userPosts: [
        {post: 'HELLO ITS MY FIRST POST'},
        {post: 'HELLO ITS MY SECOND POST'},
        {post: 'HELLO ITS MY THIRD POST'},
    ]
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
              ...state,
              userPosts: [...state.userPosts, {post: action.post}]
            };
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData,
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                userPosts: state.userPosts.filter(a=> a.id !== action.postId)
            };
        case SET_IMG:
            return {
                ...state,
                userData: {...state.userData, photos: action.file.photos}
            };
        default:
            return state;
    }
};



export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setImg = (file) => ({type: SET_IMG, file});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setPost = (post) => ({type:ADD_POST, post});

export const getProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserData(response.data))
};
export const getStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};
export const saveImg = (file) => async (dispatch) => {
    let response = await profileAPI.putImg(file);
    dispatch(setImg(response.data.data))
};


export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const saveProfileData = (profileInfo) => async (dispatch, getState) => {
    let userId = getState().auth.id;
    let response = await profileAPI.putProfileInfo(profileInfo);
    if (response.data.resultCode === 0) {
        dispatch(getProfileThunk(userId))
    } else {
        dispatch(stopSubmit('profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};


export default profilePageReducer;