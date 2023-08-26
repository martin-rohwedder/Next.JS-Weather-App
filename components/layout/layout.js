import { Fragment } from "react";
import classes from "./layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <div className={`h-screen bg-cover ${classes.background_day}`}>
        {props.children}
      </div>
    </Fragment>
  );
}

export default Layout;
