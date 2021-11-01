import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList/PostList.js";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem";
import exploreItem  from "../PostSummaryList/post.json";


const HomeScreen = () => {
  return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
          <NavigationSidebar active="home"/>
        </div>
        <div className="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
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
          <PostList/>
        </div>
        <div className="list-group d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xl-4">
          {exploreItem.map(post => {
            return (
                <PostSummaryItem post={post}/>
                );
            })
          }
        </div>
      </div>
  );
}

export default HomeScreen;