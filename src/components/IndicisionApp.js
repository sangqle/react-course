import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";
import { connect } from "react-redux";

const IndecisionApp = props => {
  const handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * props.options.length);
    const option = props.options[randomNum].text;
    alert(option);
  };

  const handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  const handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add item.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists.";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };
  const title = "Indecision";
  const subtitle = "Put your life in the hands of computer";
  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <div className="container">
        <Action hasOptions={props.options.length > 0} handlePick={handlePick} />
        <div className="widget">
          <Options options={props.options} />
          <AddOption />
        </div>
      </div>
      {/* <OptionModal
        selectedOption={selectedOption}
        handleClearSelectedOption={handleClearSelectedOption}
      /> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(IndecisionApp);

// export default class Indecision extends React.Component {
//   state = {
//     options: [],
//     selectedOption: undefined
//   };
//   handleDeleteOptions = () => {
//     this.setState(() => ({ options: [] }));
//   };
//   handleDeleteOption = optionToRemove => {
//     this.setState(prevState => ({
//       options: prevState.options.filter(option => option !== optionToRemove)
//     }));
//   };
//   handlePick = () => {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     this.setState(() => ({ selectedOption: option }));
//   };
//   handleClearSelectedOption = () => {
//     this.setState(() => ({ selectedOption: undefined }));
//   };
//   handleAddOption = option => {
//     if (!option) {
//       return "Enter valid value to add item.";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists.";
//     }

//     this.setState(prevState => ({
//       options: prevState.options.concat(option)
//     }));
//   };
//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of computer";
//     return (
//       <div>
//         <Header title={title} subtitle={subtitle} />
//         <div className="container">
//           <Action
//             hasOptions={this.state.options.length > 0}
//             handlePick={this.handlePick}
//           />
//           <div className="widget">
//             <Options
//               options={this.state.options}
//               handleDeleteOptions={this.handleDeleteOptions}
//               handleDeleteOption={this.handleDeleteOption}
//             />
//             <AddOption />
//           </div>
//         </div>
//         <OptionModal
//           selectedOption={this.state.selectedOption}
//           handleClearSelectedOption={this.handleClearSelectedOption}
//         />
//       </div>
//     );
//   }
//   componentDidMount() {
//     try {
//       const json = localStorage.getItem("options");
//       const options = JSON.parse(json);
//       if (options) {
//         this.setState(() => ({ options }));
//       }
//     } catch (error) {}
//   }
//   componentDidUpdate(prevProps, prevSate) {
//     console.log(prevSate);
//     if (prevSate.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options);
//       localStorage.setItem("options", json);
//     }
//   }
//   componentWillUnMount() {
//     console.log("component will mount");
//   }
// }
