import React from "react";
import PostSummaryList  from "../PostSummaryList/index";
import './explore.css';

const ExploreComponent = () => {
  return(
      <>
        <div className="row">

          <div className="col-10">
            <div>
              <span className="wd-search-icon">
                 <i className="fa fa-search"></i>
              </span>
                  <input className="rounded-pill wd-search-bar mb-2" type="search"
                         placeholder="Search Twitter"/>
            </div>
          </div>
          <div className="col-2">
            <a href="/#">
              <i className="fas fa-cog fa-2x"></i>
            </a>
          </div>
        </div>
        <ul className="nav mb-2 nav-tabs">

          <li className="nav-item">
            <a className="nav-link active" href="for-you.html">For you</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-none d-md-block"
               href="entertainment.html">Entertainment</a>
          </li>
        </ul>

        <div className="list-group">
          <div className="list-group-item">
            <img src="/a5/twitter/images/starship.jpeg" alt={''} className="wd-full"/>
            <h5 className="wd-title">SpaceX's StarShip</h5>
          </div>
          <PostSummaryList/>
        </div>
      </>
  );
}
export default ExploreComponent;