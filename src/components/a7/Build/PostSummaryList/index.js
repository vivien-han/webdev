import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";

const selectAllPosts = (state) => state.tweets;

const PostSummaryList = ({title}) => {
  const posts = useSelector(selectAllPosts);
  return(
      <ul className="list-group">
        {
          title &&
          <li className="list-group-item ">
            <h5>{title}</h5>
          </li>
        }
        {
          posts.map((post, idx) => {
            return (
                <PostSummaryItem key={idx} post={post}/>
            );
          })
        }
      </ul>
  );
}
export default PostSummaryList;