import Messages from "./Messages";
import React from "react";
import {connect} from "react-redux";
import {
    addMessage,
    getDialogsThunk,
    getListOfMessagesThunk,
    postMessageThunk,
    putNewDialogThunk
} from "../../Redux/messagesPageReducer";
import {compose} from "redux";
import {withAuthRedirectComp} from "../../hoc/withAuthRedirectComp";


class MessagesContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogsThunk();
    }

    render() {
        return (
            <Messages {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    messages: state.messagesPage.userMessages,
    dialogs: state.messagesPage.dialogs,
    dialogWith: state.messagesPage.dialogWith
});

export default compose(
    connect(mapStateToProps, {
        addMessage,
        getDialogsThunk,
        putNewDialogThunk,
        getListOfMessagesThunk,
        postMessageThunk
    }),
    withAuthRedirectComp)(MessagesContainer);