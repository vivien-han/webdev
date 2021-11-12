import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
  const who = useSelector(selectAllWho);
  return (
      <ul className="list-group">
        <li className="list-group-item wd-background-slight-dark">
          Who to follow
        </li>
        {
          who.map(w => {
            return(
                <WhoToFollowListItem who={w}/>
            );
          })
        }
      </ul>
  );
}
export default WhoToFollowList;
