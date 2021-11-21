import React, {useState} from "react";
import NavigationSidebar from "../NavigationSidebar";
import ProfileItem from "../ProfileItem";
import EditProfile from "./EditProfile";
import {useSelector} from "react-redux";

//const selectAllProfile = (state) => state.profile;


const ProfileScreen = () => {
  //const profile = useSelector(selectAllProfile);
  const profile = useSelector(state => state.profile);
  const [isEdit, setIsEdit] = useState(false);
  return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="profile"/>
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"
             style={{"position": "relative"}}>
          {!isEdit && <ProfileItem content={profile} edit={() => setIsEdit(true)}></ProfileItem>}
          {isEdit && <EditProfile content={profile} onSave={() => setIsEdit(false)}></EditProfile>}
        </div>
      </div>
  );
}

export default ProfileScreen;