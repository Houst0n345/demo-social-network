import {newsAPI} from "../api/api";

const ADD_NEWS = './news/ADD_NEWS'


const initialState = {
    news: null
};

const newsPageReducer = (state = initialState, action) => {
    if (action.type === ADD_NEWS) {
        return {
            ...state,
            news: action.news
        }
    }
    return state;
};


export const setNews = (news) => ({type: ADD_NEWS, news});


export const getNewsThunk = () => async (dispatch) => {
    let response = await newsAPI.getNews();
    dispatch(setNews(response.articles))
};





export default newsPageReducer;