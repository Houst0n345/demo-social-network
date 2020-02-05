const ADD_MESSAGE = './message/ADD_MESSAGE';

const initialState = {
    messages: [
        {message: 'React'},
        {message: 'Redux'}
    ]
};

const messagesPageReducer = (state=initialState, action) => {
    if (action.type === ADD_MESSAGE) {
            return {
                ...state,
                messages: [...state.messages, {message: action.message}]
            }
    } else {
        return state;
    }
};

export const addMessage = (message) => ({type: ADD_MESSAGE, message});

export default  messagesPageReducer;