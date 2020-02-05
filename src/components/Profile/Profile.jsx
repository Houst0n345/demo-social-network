import React from 'react';

import UserPostsContainer from "./UserPosts/UserPostsContainer";
import ProfileData from "./ProfileData/ProfileData";



const Profile = (props) => {

    return (<div>
        <ProfileData userData = {props.userData} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
        <UserPostsContainer />
    </div>);
};

export default Profile;
