import React from "react";
const PortfolioItemPage = props => {
  return (
    <div>
      <h1>A thing I've Done</h1>
      <p>This page for item with id of {props.match.params.id}</p>
    </div>
  );
};
export default PortfolioItemPage;
