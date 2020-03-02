import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const requireAuthentication = WrappedComponet => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponet {...props} />
      ) : (
        <p>Please login to do these...</p>
      )}
    </div>
  );
};
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo info="There are detais" isAuthenticated={false} />,
  document.getElementById("app")
);
