import Messages from "./Messages";
import React from "react";
import {connect} from "react-redux";
import {addMessage} from "../../Redux/messagesPageReducer";
import {compose} from "redux";
import {withAuthRedirectComp} from "../../hoc/withAuthRedirectComp";



let MessagesContainer = (props) => {
    return (
        <Messages {...props}/>
    )
};

let mapStateToProps = (state) => ({
    messages: state.messagesPage.messages
});

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirectComp)(MessagesContainer);