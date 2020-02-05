import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, getProfileThunk, updateStatusThunk} from "../../Redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthorizedId, getStatus, getUserData} from "../../Redux/reselectors/reselectors";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId =  this.props.match.params.userId;
        if (!userId) {
          userId = this.props.authUserId
        } if (!userId) {
          this.props.history.push('/login')
        }
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);

    }
    render() {
        return <Profile {...this.props} userData={this.props.userData} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />
    }
}


let mapStateToProps = (state) => ({
    authUserId: getAuthorizedId(state),
    userData: getUserData(state),
    status: getStatus(state)
});

export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk}),
     withRouter)(ProfileContainer)
