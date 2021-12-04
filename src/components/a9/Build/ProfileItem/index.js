import React from "react";
import "../ExploreScreen/explore.css";

const profileItem = (
    {
      content, edit,
      }
    ) => {
  return (
      <>
        <div className= "row mt-2">
          <div className="col-1 col-md-1 col-lg-1 col-xl-1 wd-middle">
            <i className= "fas fa-arrow-left wd-pointer"></i>
          </div>
          <div className="col-4 col-md-4 col-lg-4 col-xl-4">
            <div className="wd-name">
              {content.firstName} {content.lastName}
            </div>
          </div>
        </div>
        <img src = {content.bannerPicture} alt={""} className="wd-profile-banner"/>
        <div>
          <div style={{top:"-60px", position:"relative"}}>
            <img src = {content.profilePicture} alt={""} className="wd-profile-profile"/>
          </div>
          <div>
            <button className="btn btn-primary pull-right rounded-pill w-20 mt-2 wd-edit-profile-button"
                    onClick={() => edit()}>
              Edit Profile
            </button>
          </div>
        </div>
        <div>
          <b className="wd-color-white">{content.firstName} {content.lastName}</b>
          <div className= "wd-color-gray">
            @{content.handle}
          </div>
          <div className= "wd-color-white">
            {content.bio}
          </div>
          <div className= "wd-color-gray">
            <div className="wd-profile-information fas fa-map-marker-alt">
              <span className={"wd-space"}></span>
              {content.location}
            </div>
            <div className="wd-profile-information fas fa-birthday-cake">
              <span className={"wd-space"}></span>
              {content.dateOfBirth}
            </div>
            <div className="wd-profile-information fas fa-calendar-alt">
              <span className={"wd-space"}></span>
              {content.dateJoined}
            </div>
          </div>
          <br/>
          <div className="wd-color-white">
            <b className="wd-follow">{content.followingCount}
            <span className="wd-follow-count"> Following</span></b>
            <b className="wd-follow">{content.followersCount}
            <span className="wd-follow-count"> Followers</span></b>
          </div>
        </div>
      </>
  );
}

export default profileItem;