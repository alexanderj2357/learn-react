import React from "react";
import ReactDOM from "react-dom";

const buttonText = 'Click Here!';
const style = { backgroundColor: 'blue', color: 'white' };

class App extends React.Component {
  render() {
    return (
      <div>
        <label className="label" for="name">
          Enter Name:
        </label>
        <input id="name" type="text" />
        <button style={ style }>
          {buttonText}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
