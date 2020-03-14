import React from "react";
import Register from "./Register.jsx";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default App;
