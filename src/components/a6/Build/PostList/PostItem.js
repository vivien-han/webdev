import React from "react";

const PostItem = ({post}) => {
  let added = '';
  if (post.main.link != null) {
    added = (
        <div>
            <p className="wd-post-title">
              {post.main.title}
            </p>
            <div className="wd-color-lightgray">
              {post.main.content}
            </div>  
            <div className="wd-color-lightgray mb-2">
              <a href="https://{post.main.link}"><i className="fa fa-link"></i> {post.main.link}</a>
            </div>  
        </div>
    );
  }
  return (
  <div className="list-group-item wd-background-black mt-3">
    <div className="row">
      <div className="col-1">
        <img alt={''} src={post.icon} style={{"width": "100%", "height": "36px", "border-radius": "50%"}}/>
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col-10">
            <div>
              <b className="wd-color-white">{post.userName}</b> <i className="fas fa-check-circle wd-color-white"></i>
              <span className="wd-color-lightgray">{post.handle} - {post.time}</span>
            </div>
          </div>
          <div className="col-1">
            <i href="#" className="fas fa-ellipsis-h wd-color-white" ></i>
          </div>
        </div>
        
        <div className="wd-color-white mb-2">
          {post.tweet}
        </div>
        <img alt={''} src={post.main.image} className="wd-home-image"/>
        {added}
        <div className="row wd-color-lightgray mt-2 mb-2">
          <div className="col-3">
            <i className='far fa-comment'></i> {post.comment}
          </div>
          <div className="col-3">
            <i className='fas fa-retweet'></i> {post.retweet}
          </div>
          <div className="col-3">
            <i className='far fa-heart'></i> {post.like}
          </div>
          <div className="col-3">
            <i className='fas fa-share'></i>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
};
export default PostItem;