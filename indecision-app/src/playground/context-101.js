import React from "react";
const ColorContext = React.createContext("yellow");
import ReactDOM from "react-dom";
class App extends React.Component {
  render() {
    return (
      <ColorContext.Provider>
        <P />
      </ColorContext.Provider>
    );
  }
}
class P extends React.Component {
  render() {
    console.log(this.context);
    return <C />;
  }
}
class C extends React.Component {
  render() {
    return <Sub_C />;
  }
}
class Sub_C extends React.Component {
  render() {
    <div>{this.context}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
