import React from "react";

class Likes extends React.Component {
  constructor(props) {
    console.log("Likes - Constructor");
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };
  // Lifecycle methods
  componentDidMount() {
    console.log("Likes - componentDidMount");
  }
  componentDidUpdate() {
    console.log("Likes - componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Likes - componentWillUnmount");
  }
  render() {
    console.log("Likes - render");
    return (
      <div id="likes">
        <br />
        <button onClick={this.handleLike} className="button">
          Like
        </button>

        <h2 className="title is-5">Likes: {this.state.likes}</h2>
      </div>
    );
  }
}

export default Likes;
