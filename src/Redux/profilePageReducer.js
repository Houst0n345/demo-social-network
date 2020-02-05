import {profileAPI} from "../api/api";

const ADD_POST = './profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = './profile/UPDATE-NEW-POST-TEXT';
const SET_USER_DATA = './profile/SET_USER_DATA';
const SET_STATUS = './profile/SET_PROFILE_STATUS';
const DELETE_POST = './profile/DELETE_POST';


const initialState = {
    postData: [
        {messagePost: 'hey hey ehy', like: 4, id:0},
        {messagePost: 'herererer', like: 5, id:1}
    ],
    newPostText: 'my-1-react-app',
    userData: null,
    status: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                postData: [...state.postData, {messagePost: newPost, like: 0, id:2}],
                newPostText: ''
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
                postData: state.postData.filter(a=> a.id !== action.postId)
            };
        default:
            return state;
    }
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});


export const getProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserData(response.data))
};
export const getStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};


export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};


export default profilePageReducer;