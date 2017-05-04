import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
      super(props);
      this.state = { startWith: this.props.startWith };
  }
  render() {
    return (
        <div className="Timer">
            {this.state.startWith}
        </div>
    );
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer startWith={150}/>
      </div>
    );
  }
}

export default App;
