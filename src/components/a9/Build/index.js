import React from "react";
import {Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who: who, profile: profile})
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Build = () => {
  return(
      <Provider store={store}>
        <div>
          <Route path="/a9/twitter/home" exact={true} component={HomeScreen}/>
          <Route path="/a9/twitter/explore" exact={true} component={ExploreScreen}/>
          <Route path="/a9/twitter/profile" exact={true} component={ProfileScreen}/>
        </div>
      </Provider>
  )
};

export default Build;