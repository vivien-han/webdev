import React, {useState} from "react";
import {useDispatch} from "react-redux";

export const EditProfile = ({content, onSave}) => {
  let [tempProfile, setTempProfile] = useState(content);
  const dispatch = useDispatch();
  const saveClickHandler = () => {
    dispatch({type: 'save-profile', save: tempProfile});
    onSave();
  }
  return(
      <>
        <div className="wd-color-white">
          <i className="fas fa-times" onClick={() => onSave()}>
          <b className="wd-edit-profile-text"> Edit Profile</b></i>
          <button className="btn btn-primary pull-right rounded-pill wd-save-button w-20 mt-2" onClick={saveClickHandler}>Save</button>
        </div>
        <div style={{marginTop: "10px"}}>
          <img src = {tempProfile.bannerPicture} alt={""} className="wd-profile-banner"/>
          <div style={{top:"-60px", position:"relative"}}>
            <img src = {tempProfile.profilePicture} alt={""} className="wd-profile-profile"/>
          </div>
        </div>

        <div className="wd-input-border">
          <div>First Name</div>
          <input
              value={tempProfile.firstName}
              onChange={(event => {setTempProfile({
                ...tempProfile,
                firstName: event.target.value
              })})}
              type={'text'}
              className="wd-input w-100 rounded-2 mx-1">
          </input>
        </div>

        <div className="wd-input-border">
          <div>Last Name</div>
          <input
              value={tempProfile.lastName}
              onChange={event => {setTempProfile({
                ...tempProfile,
                lastName: event.target.value
              })}}
              type={'text'}
              className="wd-input w-100 rounded-2 mx-1">
          </input>
        </div>

        <div className="wd-input-border">
          <div>Bio</div>
          <textarea
              value={tempProfile.bio}
              onChange={(event => {
                setTempProfile({
                  ...tempProfile,
                  bio: event.target.value
                })
              })}
              type={'text'}
              className="wd-input w-100 h-500 rounded-2 mx-1">
        </textarea>
        </div>

        <div className="wd-input-border">
          <div>Location</div>
          <textarea
              value={tempProfile.location}
              onChange={(event => {
                setTempProfile({
                  ...tempProfile,
                  location: event.target.value
                })
              })}
              type={'text'}
              className="wd-input w-100 rounded-2 mx-1">
        </textarea>
        </div>

        <div className="wd-input-border">
          <div>Website</div>
          <textarea
              value={tempProfile.website}
              onChange={(event => {
                setTempProfile({
                  ...tempProfile,
                  website: event.target.value
                })
              })}
              type={'text'}
              className="wd-input w-100 rounded-2 mx-1">
        </textarea>
        </div>

        <div className="wd-input-border">
          <div>Birth Date</div>
          <input
              value={tempProfile.dateOfBirth}
              onChange={(event => {setTempProfile({
                ...tempProfile,
                dateOfBirth: event.target.value
              })})}
              type={'text'}
              className="wd-input w-100 rounded-2 mx-1">
          </input>
        </div>

      </>
  );
};

export default EditProfile;