import React from "react";
import { connect } from "react-redux";
import moment from "moment";
const Header = props => {
  let curTime = moment(props.currentTime).format("DD MMM YYYY HH:mm:ss");
  return (
    <div className="header">
      <div className="container">
        <div className="clock">{curTime}</div>
        <h1 className="header___title">{props.title}</h1>
        {props.subtitle && (
          <h2 className="header__subtitle">{props.subtitle}</h2>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const mapStateToProps = state => {
  return {
    currentTime: state.time.currentTime
  };
};
const ConnectedHeader = connect(mapStateToProps)(Header);
export default ConnectedHeader;
