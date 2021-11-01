const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item wd-background-black wd-post wd-post-with-image">
      <div class="row">
        <div class="col-md-10 col-sm-8">
          <span class="wd-color-gray">
              ${post.topic}
          </span><br>
          <b>${post.userName}</b>
          <i class="fas fa-check-circle"></i>
          <span class="wd-color-gray"> - ${post.time}</span><br>
          <b> ${post.title}</b><br>
          <span class="wd-color-gray">
            123K Tweets
          </span>
        </div>
        <div class="col-md-2 col-sm-4">
            <img src=" ${post.image}" class="wd-post-image">
        </div>
      </div>
    </li>
  `);
}
export default PostSummaryItem;