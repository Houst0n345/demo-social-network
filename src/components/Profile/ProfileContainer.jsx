import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunk,
    getProfileThunk,
    updateStatusThunk,
    saveImg,
    saveProfileData
} from "../../Redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthorizedId, getStatus, getUserData} from "../../Redux/reselectors/reselectors";


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
        return <Profile {...this.props} />
    }
}


let mapStateToProps = (state) => ({
    authUserId: getAuthorizedId(state),
    userData: getUserData(state),
    status: getStatus(state)
});

export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk, saveImg, saveProfileData}),
    withRouter)(ProfileContainer)
