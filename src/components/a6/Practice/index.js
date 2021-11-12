import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItems";
import TodoList from "./Todo/TodoList";


const Practice = () => {
  return(
      <>
        <h1>a6 Practice</h1>
        <Link to="/a6/hello">
          Hello
        </Link> |
        <Link to="/a6/build">
          Build
        </Link>
        <h1>a7</h1>
        <Link to="/a7/practice">
          Practice
        </Link> |
        <Link to="/a7/twitter/home">
          Build
        </Link>
        <TodoItem/>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
      </>

  )
};

export default Practice;