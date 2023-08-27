import { Fragment } from "react";
import classes from "./layout.module.css";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <div
        className={`flex flex-col h-screen bg-cover ${classes.background_day}`}
      >
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
