import React from "react";
import PostItem from "./PostItem.js";
import tweets from "./tweet.json";

const PostList = () => {
  return (
      <>
        {tweets.map(tweet => {
          return (
              <PostItem post={tweet}/>
              );
          })
        }
      </>
  );
}

export default PostList;