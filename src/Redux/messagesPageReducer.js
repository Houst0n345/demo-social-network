import {messagesAPI} from "../api/api";


const ADD_MESSAGE = './message/ADD_MESSAGE';
const SET_DIALOGS = './message/SET_DIALOGS';
const SET_MESSAGES = './message/SET_MESSAGES';
const SET_DIALOG_COMPANION = './message/SET_DIALOG_COMPANION';


const initialState = {
    dialogs: null,
    userMessages: {
        items: []
    },
    dialogWith: null
};

const messagesPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                userMessages: {
                    ...state.userMessages,
                    items: [].concat(...state.userMessages.items,[action.message.message])
                }
            };

        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            };

        case SET_MESSAGES:
            return {
                ...state,
                userMessages: action.messages
            };

        case SET_DIALOG_COMPANION:
            return {
                ...state,
                dialogWith: action.id
            };
        default:
            return state;
    }
};


export const addMessage = (message) => ({type: ADD_MESSAGE, message});
export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});
export const setDialogCompanion = (id) => ({type: SET_DIALOG_COMPANION, id});
// ========================================================================
export const setMessages = (messages) => ({type: SET_MESSAGES, messages});


// получить все диалоги
export const getDialogsThunk = () => async (dispatch) => {
    let response = await messagesAPI.getDialogs();
    dispatch(setDialogs(response.data));
};

// добавление нового диалога с userId на 1-ое место диологов
export const putNewDialogThunk = (userId) => async () => {
    await messagesAPI.putNewDialog(userId);
};

// Запрос за всеми сообщениями userId
export const getListOfMessagesThunk = (userId) => async (dispatch) => {
    let response = await messagesAPI.getListOfMessages(userId);
    dispatch(setMessages(response.data));
    dispatch(setDialogCompanion(userId))

};

// Добавление нового сообщения и отправка его на сервер
// в ответ приходит объект но не знаю с чем
export const postMessageThunk = (userId, message) => async (dispatch) => {

    let response = await messagesAPI.postMessage(userId, message);
    // проверить что придёт
    dispatch(addMessage(response.data.data))
};


export default messagesPageReducer;


