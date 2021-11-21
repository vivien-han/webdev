import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Practice7 from "./components/a7/Practice";
import Practice8 from "./components/a8/Practice";
import Build from "./components/a6/Build";
import Build7 from "./components/a7/Build";
import Build8 from "./components/a8/Build";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
          </Route>
          <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
            <Practice/>
          </Route>
          <Route path="/a6/build" exact={true}>
            <Build/>
          </Route>
          <Route path="/a6/twitter/home" component={HomeScreen}/>
          <Route path="/a6/twitter/explore" component={ExploreScreen}/>

          <Route path={["/a7", "/a7/practice"]} exact={true}>
            <Practice7/>
          </Route>
          <Route path="/a7/twitter/*" exact={true}>
            <Build7/>
          </Route>

          <Route path={["/a8", "/a8/practice"]} exact={true}>
            <Practice8/>
          </Route>
          <Route path="/a8/twitter/*" exact={true}>
            <Build8/>
          </Route>
        </div>
      </BrowserRouter>
  );
}
export default App;