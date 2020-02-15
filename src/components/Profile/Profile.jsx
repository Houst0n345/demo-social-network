import React from 'react';
import ProfileData from "./ProfileData/ProfileData";
import UserPosts from "./UserPosts/UserPosts";
import Preloader from "../common/Preloader";





const Profile = (props) => {
    if(!props.userData){
        return <Preloader/>
    } else {
        return (<div>
            <ProfileData {...props}/>
            <UserPosts  setPost={props.setPost} posts={props.posts} src={props.userData.photos.small}
                        userName={props.userData.fullName}/>
        </div>);
    }
};

export default Profile;
