import React from "react";
import { connect } from "react-redux";
import { addOption } from "../actions/optionTime";

const AddOption = props => {
  const handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (!option) {
      alert("Enter valid value to add item.");
    } else {
      props.dispatch(addOption(option));
      e.target.elements.option.value = "";
    }
  };
  return (
    <div>
      <form className="add-option" onSubmit={handleAddOption}>
        <input
          autoFocus
          className="add-option__input"
          type="text"
          name="option"
        ></input>
        <button className="button">Add Option</button>
      </form>
    </div>
  );
};

export default connect()(AddOption);
