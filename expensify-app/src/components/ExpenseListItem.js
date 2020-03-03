import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
export const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  note
} = {}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {moment(createdAt).format("MMM Do YY")}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
