import React from "react";
import "../ExploreScreen/explore.css";

const profileItem = (
    {
      profile = {
        firstName: 'Vivien',
        lastName: 'Han',
        handle: 'vivien_hw',
        profilePicture: '/a5/twitter/images/grimes.jpeg',
        bannerPicture: '/a5/twitter/images/web-dev.jpeg',
        bio: 'Student, Software Engineer Intern, Space, and renewable enthusiast. Retweets and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Bellevue, WA',
        dateOfBirth: '8/10/1994',
        dateJoined: '4/2013',
        followingCount: '312',
        followersCount: '180'
      }
    }) => {
  return (
      <ul className="list-group">
        <li className="list-group-item wd-background-black">
          <div>
            <img alt={''} src={profile.bannerPicture} className="wd-profile-banner"/>
          </div>
          <div className="row">
            <div className="col-5 mt-2">
              <img alt={''} src={profile.profilePicture} className="wd-profile-profile"/>
            </div>
            <div className="col-5 mt-2">
              <button href="/#" className="btn btn-primary rounded-pill"> Edit Profile</button>
            </div>
          </div>
          <div className="wd-color-white">
            <b style={{"fontSize": "50px"}}>{profile.firstName} {profile.lastName}</b><br/>
            <span className="wd-color-gray">@{profile.handle}</span><br/>
            {profile.bio}<br/>
            <span className="wd-color-gray">
              <i className="fa fa-map-marker"> {profile.location} </i>
              <i className="fa fa-circle"> Born {profile.dateOfBirth} </i>
              <i className="fa fa-calendar"> Joined {profile.dateJoined} </i>
            </span><br/>
            <div className="row">
              <div className="col-3">
                {profile.followingCount}
                <span className="wd-color-gray"> Following</span>
              </div>
              <div className="col-3">
                {profile.followersCount}
                <span className="wd-color-gray"> Followers</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
  );
}

export default profileItem;