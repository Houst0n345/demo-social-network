import {usersAPI} from "../api/api";
import {updateObjInArr} from "../utils/helper/object-helper";

const SUBSCRIBE = './users/SUBSCRIBE';
const UNSUBSCRIBE = './users/UNSUBSCRIBE';
const SET_USERS_DATA = './users/SET-USERS-DATA';
const SET_PAGE_NUMBER = './users/SET_PAGE_NUMBER';
const SET_TOTAL_USERS_COUNT = './users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = './users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = './users/TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
    usersData: [],
    totalCount: 0,
    pageNumber: 1,
    pageSize: 9,
    isFetching: false,
    followingInProgress: []
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                 usersData: updateObjInArr(state.usersData, action.userId,'id',{followed: true})};
        case UNSUBSCRIBE:
            return {
                ...state,
                usersData: updateObjInArr(state.usersData, action.userId,'id',{followed: false})};


        case SET_USERS_DATA: {
            return {...state, usersData: action.usersData}
        }
        case SET_PAGE_NUMBER: {
            return {...state, pageNumber: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};


export const subscribe = (userId) => ({type: SUBSCRIBE, userId});
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE, userId});
export const setUsers = (usersData) => ({type: SET_USERS_DATA, usersData});
export const setPageNumber = (currentPage) => ({type: SET_PAGE_NUMBER, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
});

export const getUsersInfo = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setPageNumber(pageNumber))
};

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId))
};

export const unfollowThunk = (userId) => {
    return async (dispatch) => {
    let apiMethod = usersAPI.deleteUnfollow.bind(usersAPI);
        let actionCreator = unsubscribe;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}
};

export const followThunk = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.postFollow.bind(usersAPI);
        let actionCreator = subscribe;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
};


export default usersPageReducer;