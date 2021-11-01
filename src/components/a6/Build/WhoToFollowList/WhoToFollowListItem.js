import React from "react";

const WhoToFollowListItem = (
    {
      who = {
        avatarIcon: '/a5/twitter/images/nasa.jpeg',
        userName: 'NASA',
        handle: 'NASA',
      }
    }) => {
  return (
      <>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3 col-xl-2 col-lg-3">
              <img alt={''} src={who.avatarIcon} width="48" className="wd-image" style={{"border-radius": "50%"}}/>
            </div>
            <div className="col-6 col-xl-7 col-lg-5">
              <b>{who.userName}</b>
              <i className="fa fa-check-circle"></i><br/>
              @{who.handle}
            </div>
            <div className="col-3 col-xl-3 col-lg-4">
              <button className="btn btn-primary m-lg-2"
                      style={{"border-radius": "50px"}}>
                Follow
              </button>
            </div>
          </div>
        </li>
      </>
  );
}
export default WhoToFollowListItem;