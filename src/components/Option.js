import React from "react";
import moment from "moment";
export default props => (
  <div className="option">
    <div className="option__text">
      <p>
        {props.count}. {props.optionText}
      </p>
    </div>
    <div>
      <p className="option_created_at">
        {moment(props.createdAt).format("DD MMM YYYY HH:mm:ss")}
      </p>
      <button
        className="button button-link"
        onClick={e => {
          props.handleDeleteOption(props.id);
        }}
      >
        Remove
      </button>
    </div>
  </div>
);
