import {getAuthThunk} from "./authReducer";

const INITIALIZATION = './app/INITIALIZATION';

const initialState = {
    initialized: false
};

const appReducer = (state= initialState, action) => {

    switch (action.type) {

        case INITIALIZATION: {
            return {...state,
                    initialized: true
            }
        }
        default:
            return state;
    }
};



export const setInitialized = () => ({type: INITIALIZATION});

export const initializedThunk = () =>(dispatch) => {
   let promise = dispatch(getAuthThunk());
   Promise.all([promise])
       .then(() => {
       dispatch(setInitialized());
   })
};

export default appReducer;