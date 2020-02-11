import React from 'react';

import UserPostsContainer from "./UserPosts/UserPostsContainer";
import ProfileData from "./ProfileData/ProfileData";



const Profile = (props) => {

    return (<div>
        <ProfileData {...props}/>
        <UserPostsContainer />
    </div>);
};

export default Profile;
