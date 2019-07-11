import React, { Component } from "react";

class App extends Component {
  state = { displayBio: false };

  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>Hi my name is Rohit.I'm a software Engineer</p>
        <p>I'm always looking forward to working on meaningful projects</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in electronic city, and code everyday</p>
            <p>
              My favorite language is javascript, and i think react.js is
              awesome
            </p>
            <p>Besides coding, I also love listening to music</p>
            <button onClick={this.toggleDisplayBio}>Read Less</button>
          </div>
        ) : (
          <button onClick={this.toggleDisplayBio}>Read More</button>
        )}
      </div>
    );
  }
}

export default App;
