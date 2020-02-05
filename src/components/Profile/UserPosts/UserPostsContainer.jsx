import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profilePageReducer";
import UserPosts from "./UserPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: ()  => {
            dispatch(addPostActionCreator());
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
