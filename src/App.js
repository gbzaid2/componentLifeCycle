import React from "react";
import Likes from "./Likes.js";
class App extends React.Component {
  constructor(props) {
    console.log("App - Constructor");
    super(props);
    this.state = {
      counter: 0,
      renderLikes: false
    };
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  //
  mountLikes = () => {
    this.setState({
      renderLikes: true
    });
  };
  unMountLikes = () => {
    this.setState({
      renderLikes: false
    });
  };

  // Lifecycle methods
  componentDidMount() {
    console.log("App - componentDidMount");
  }

  componentDidUpdate() {
    console.log("App - componentDidUpdate");
  }
  render() {
    console.log("App - render");
    return (
      <div>
        <button onClick={this.incrementCounter} className="button is-success">
          Increment Counter
        </button>
        <h2 className="title is-2">Counter: {this.state.counter} </h2>
        <button onClick={this.mountLikes} className="button is-link">
          Mount Likes
        </button>
        <button onClick={this.unMountLikes} className="button is-danger">
          Unmount Likes
        </button>
        {this.state.renderLikes ? <Likes /> : null}
      </div>
    );
  }
}

export default App;
