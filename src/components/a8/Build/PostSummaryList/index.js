import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./post.json";
//import {useSelector} from "react-redux";

//const selectAllPosts = (state) => state.tweets;

const PostSummaryList = () => {
  //const posts = useSelector(selectAllPosts);
  return(
      <>
        {posts.map(post => {
          return(
              <PostSummaryItem post = {post}/>
          );
        })}
      </>
  );
}
export default PostSummaryList;