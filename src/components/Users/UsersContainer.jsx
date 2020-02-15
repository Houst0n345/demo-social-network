import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followThunk,
    getUsersInfo,
    setPageNumber,
    toggleIsFetching,
    unfollowThunk,
} from "../../Redux/usersPageReducer";
import Preloader from "../common/Preloader";
import {compose} from "redux";


class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersInfo(this.props.pageNumber, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersInfo(pageNumber, this.props.pageSize)
    };
    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                pageNumber={this.props.pageNumber}
                state={this.props.state}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                unfollowThunk={this.props.unfollowThunk}
                followThunk={this.props.followThunk}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.usersPage.usersData,
        totalCount: state.usersPage.totalCount,
        pageNumber: state.usersPage.pageNumber,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default compose(
    connect(mapStateToProps, {setPageNumber, toggleIsFetching, getUsersInfo, unfollowThunk, followThunk
    }))(UsersContainerComponent);

