const PostItem = (post) => {
  let added = '';
  if (post.main.link != null) {
    added = (`
        <div>
            <p class="wd-post-title">
              ${post.main.title}
            </p>
            <div class="wd-color-lightgray">
              ${post.main.content}
            </div>  
            <div class="wd-color-lightgray mb-2">
              <a href="https://${post.main.link}"><i class="fa fa-link"></i> ${post.main.link}</a>
            </div>  
        </div>
    `);
  }
  return (`
  <div class="list-group-item wd-background-black mt-3">
    <div class="row">
      <div class="col-1">
        <img src="${post.icon}" style="width: 100%; height: 36px; border-radius: 50%">
      </div>
      <div class="col-10">
        <div class="row">
          <div class="col-10">
            <div>
              <b class="wd-color-white">${post.userName}</b> <i class="fas fa-check-circle wd-color-white"></i> 
              <span class="wd-color-lightgray">${post.handle} - ${post.time}</span>        
            </div>
          </div>
          <div class="col-1">
            <i href="#" class="fas fa-ellipsis-h wd-color-white" ></i>
          </div>
        </div>
        
        <div class="wd-color-white mb-2">
          ${post.tweet}
        </div>
        <img src="${post.main.image}" class="wd-home-image">
        ${added}
        <div class="row wd-color-lightgray mt-2 mb-2">
          <div class="col-3">
            <i class='far fa-comment'></i> ${post.comment}
          </div>
          <div class="col-3">
            <i class='fas fa-retweet'></i> ${post.retweet}
          </div>
          <div class="col-3">
            <i class='far fa-heart'></i> ${post.like}
          </div>
          <div class="col-3">
            <i class='fas fa-share'></i>
          </div>
        </div>

      </div>
    </div>
  </div>
  `)
};
export default PostItem;