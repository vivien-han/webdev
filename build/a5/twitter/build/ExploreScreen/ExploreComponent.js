import PostSummaryList from "../PostSummaryList/PostSummaryItem.js";
import exploreItem  from "../PostSummaryList/post.js";

const ExploreComponent = () => {
  return(` 
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
    <ul class="nav mb-2 nav-tabs"> 
    <!-- tabs --> 
      <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
      </li>
    </ul> 
    
    <!-- image with overlaid text --> 
    <div>
      <img src="../../images/starship.jpeg" class="mt-2" width="100%">
    </div>
    
    <div class="list-group">
      ${exploreItem.map(post => {
        return PostSummaryList(post);
      }).join('')}
    </div>
  `);
}
export default ExploreComponent;