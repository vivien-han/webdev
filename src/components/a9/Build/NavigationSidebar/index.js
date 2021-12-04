import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active="explore"}) => {
  return(
      <>
        <div className="list-group">
          <Link to="/a9/">
            <a href="/#" className="list-group-item">
              <i className="fab fa-twitter"></i></a>
          </Link>
          <Link to="/a9/twitter/home">
            <a href="/#" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
              <div className="d-none d-xl-block">
              <i className="fas fa-home"></i>
              <span className="ml-1">
                  Home
              </span>
              </div>

              <div className="d-xl-none">
                  <i className="fas fa-home"></i>
              </div>

            </a>
          </Link>
          <Link to="/a9/twitter/explore">
            <a href="/#" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                <i className="fas fa-hashtag"></i>
                <span className="ml-1">
                    Explore
                </span>
                </div>

                <div className="d-xl-none">
                    <i className="fas fa-hashtag"></i>
                </div>

            </a>
          </Link>
          <Link to="/a9/twitter/notification">
            <a href="/#" className={`list-group-item ${active === 'notification' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                <i className="fas fa-bell"></i>
                <span className="ml-1">
                    Notification
                </span>
                </div>

                <div className="d-xl-none">
                    <i className="fas fa-bell"></i>
                </div>

            </a>
          </Link>
          <Link to="/a9/twitter/message">
            <a href="/#" className={`list-group-item ${active === 'message' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                <i className="fas fa-envelope"></i>
                <span className="ml-1">
                    Message
                </span>
                </div>

                <div className="d-xl-none">
                    <i className="fas fa-envelope"></i>
                </div>

            </a>
          </Link>
          <Link to="/a9/twitter/bookmark">
            <a href="/#" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                <i className="fas fa-bookmark"></i>
                <span className="ml-1">
                    Bookmarks
                </span>
                </div>

                <div className="d-xl-none">
                    <i className="fas fa-bookmark"></i>
                </div>

            </a>
          </Link>
          <Link to="/a9/twitter/list">
            <a href="/#" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                <i className="fas fa-list"></i>
                <span className="ml-1">
                    Lists
                </span>
                </div>

                <div className="d-xl-none">
                    <i className="fas fa-list"></i>
                </div>

            </a>
          </Link>
          <Link to="/a9/twitter/profile">
            <a href="/#" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                <i className="fas fa-user-alt"></i>
                <span className="ml-1">
                    Profile
                </span>
                </div>

                <div className="d-xl-none">
                    <i className="fas fa-user-alt"></i>
                </div>

            </a>
          </Link>
          <Link to="/a9/twitter/more">
            <a href="/#" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <div className="d-none d-xl-block">
                <i className="fas fa-ellipsis-h wd-more "></i>
                <span className="ml-1">
                    More
                </span>
                </div>

                <div className="d-xl-none">
                <i className="fas fa-ellipsis-h wd-more "></i>
                </div>

            </a>
          </Link>
        </div>
        <div className="d-grid mt-2">
          <a href="tweet.html" className="btn btn-primary btn-block rounded-pill"> Tweet</a>
        </div>
      </>
  );
}
export default NavigationSidebar;