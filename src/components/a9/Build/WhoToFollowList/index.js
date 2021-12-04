import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

//const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
  //const who = useSelector(selectAllWho);
  const who = useSelector((state) => state.who);
  return (
      <ul className="list-group">
        <li className="list-group-item wd-background-slight-dark">
          Who to follow
        </li>
        {
          who.map(who => {
            return(
                <WhoToFollowListItem who={who}/>
            );
          })
        }
      </ul>
  );
}
export default WhoToFollowList;
