import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Option from "./Option";

const Options = props => {
  const handleDeleteAllOptions = () => {
    props.delete_options();
  };
  const handleDeleteOption = id => {
    props.delete_option(id);
  };
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button-link" onClick={handleDeleteAllOptions}>
          Remove All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started.</p>
      )}
      {props.options &&
        props.options.map((option, index) => {
          return (
            <Option
              count={index + 1}
              optionText={option.text}
              createdAt={option.createdAt}
              handleDeleteOption={handleDeleteOption}
              id={option.id}
              key={option.id}
            />
          );
        })}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    add_option: () => dispatch({ type: "ADD_OPTION" }),
    delete_option: id => dispatch({ type: "DELETE_OPTION", id }),
    delete_options: () => dispatch({ type: "DELETE_OPTIONS" })
  };
};
const mapStateToProps = state => {
  return {
    options: state.options
  };
};

const ConnectOptions = connect(mapStateToProps, mapDispatchToProps)(Options);
export default ConnectOptions;
