import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import friendsPageReducer from "./friendsPageReducer";



let store = {
    _state: {
        postPage: {
            postData: [
                {messagePost: 'hey hey ehy', like: 4},
                {messagePost: 'hey rererer', like: 5}
            ],
            newPostText: 'my-1-react-app'
        },
        messagesPage: {
            dialogsData: [
                {id: 0, name: 'Vlados'},
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Tania'},
                {id: 3, name: 'Andrei'}
            ],
            Messages: [
                {message: 'Darova'},
                {message: 'Kak ti'},
                {message: 'blala'},
                {message: 'Dalolodda'},
                {message: 'Xd'},
                {message: 'Xd'},
                {message: 'Xd'},
                {message: 'Xd'}
            ],
            messageValue: 'my-1-react-app'
        },
        friendsPage: {
            srcImgFriends: [
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetGoUcEvFxa8mPHzkRslsiCegxjE_k5zD3zi4JFc305MfPqmz&s',
                    name: 'Mark'
                },
                {
                    src: 'https://avatars.mds.yandex.net/get-zen_doc/198554/pub_5b5e2861e9151400a9f46d47_5b5e28d47db89a00ab58719d/scale_1200',
                    name: 'Daenerys Stormborn of House Targaryen, Rightful heir to the Iron Throne, Rightful Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.'
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrPhRtOpFV4A4IGZRrHr3FGB1HJQjEIM8CNWD1Blw7A_wi7qXhw&s',
                    name: 'Ron'
                },
                {
                    src: 'http://avatars.mds.yandex.net/get-ott/374297/2a000001670d602655ccca469b13732be517/orig',
                    name: 'Johnny'
                },


            ]
        },
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    getState() {

        return this._state;

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.postPage = profilePageReducer(this._state.postPage, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
        this._state.friendsPage = friendsPageReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
        }
    };


export default store;
window.store = store;



