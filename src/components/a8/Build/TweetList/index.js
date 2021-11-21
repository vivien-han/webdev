import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterService";

//const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
  const tweets = useSelector((state)=>state.tweets);
  const dispatch = useDispatch();
  useEffect(() => fetchAllTweets(dispatch))

  return(
      <ul className="list-group">
        {
          tweets.map(tweet =>
              <TweetListItem tweet={tweet}/>
              )
        }
      </ul>
  )
};

export default TweetList;