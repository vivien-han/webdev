import React from "react";

const PostSummaryItem = (
    {
      post = {
        topic: 'Web Development',
        userName: 'ReactJS',
        time: '2h',
        title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
        image: '/a5/twitter/images/web-dev.jpeg'
      }
    }) => {
  return (
        <li className="list-group-item wd-background-black wd-post wd-post-with-image">
          <div className="row">
            <div className="col-md-10 col-sm-8">
              <span className="wd-color-gray">
                  {post.topic}
              </span><br/>
                  <b>{post.userName}</b>
                  <i className="fas fa-check-circle"></i>
                  <span className="wd-color-gray"> - {post.time}</span><br/>
                  <b> {post.title}</b><br/>
              <span className="wd-color-gray">
                123K Tweets
              </span>
            </div>
            <div className="col-md-2 col-sm-4">
              <img alt={''} src={post.image} className="wd-post-image"/>
            </div>
          </div>
        </li>
  );
}
export default PostSummaryItem;