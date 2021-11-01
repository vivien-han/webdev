import NavigationSidebar from "./NavigationSidebar.js";
import PostList from "../PostList/PostList.js";

import PostSummaryList from "../PostSummaryList/PostSummaryItem.js";
import exploreItem  from "../PostSummaryList/post.js";
(function ($) {
  $('#wd-home').append(` 
    <div class="row mt-2"> 
      <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2"> 
        ${NavigationSidebar()} 
      </div>
      <div class="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6"> 
        <div class="row"> 
        <!-- search field and cog --> 
          <div class="col-10">
            <div>
              <span class="wd-search-icon">
                 <i class="fa fa-search"></i>
              </span>
              <input class="rounded-pill wd-search-bar mb-2" type="search" placeholder="Search Twitter"/>
            </div>
          </div>
          <div class="col-2">
             <a href="#">
               <i class="fas fa-cog fa-2x"></i>
             </a>
          </div>
        </div> 
        ${PostList()} 
      </div>
      <div class="list-group d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xl-4"> 
        ${exploreItem.map(post => {
          return PostSummaryList(post);
        }).join('')} 
      </div> 
    </div> 
  `);
})($);