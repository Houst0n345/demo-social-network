import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunk,
    getProfileThunk,
    updateStatusThunk,
    saveImg,
    saveProfileData, setPost
} from "../../Redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthorizedId, getStatus, getUserData} from "../../Redux/reselectors/reselectors";
import {putNewDialogThunk} from "../../Redux/messagesPageReducer";
import {withAuthRedirectComp} from "../../hoc/withAuthRedirectComp";


class ProfileContainer extends React.Component {
    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }
    componentDidMount() {
        this.refreshProfile ();
    }
    // ===сравнивает текущего пользователя с авторизованным если !== то перерисовыает страницу ===
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId!==prevProps.match.params.userId){
            this.refreshProfile ();
        }
    }

    render() {
        return <Profile saveProfileData={this.props.saveProfileData}
                        saveImg={this.props.saveImg}
                        userData={this.props.userData}
                        authUserId={this.props.authUserId}
                        updateStatusThunk={this.props.updateStatusThunk}
                        getStatusThunk={this.props.getStatusThunk}
                        getProfileThunk={this.props.getProfileThunk}
                        status={this.props.status}
                        match={this.props.match}
                        setPost={this.props.setPost}
                        posts={this.props.posts}
                        putNewDialogThunk={this.props.putNewDialogThunk}
        />
    }
}


let mapStateToProps = (state) => ({
    authUserId: getAuthorizedId(state),
    userData: getUserData(state),
    status: getStatus(state),
    posts: state.profilePage.userPosts,
});

export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk,
        updateStatusThunk, saveImg, saveProfileData, setPost,
        putNewDialogThunk}),
        withRouter,withAuthRedirectComp)(ProfileContainer)
