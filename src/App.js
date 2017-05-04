import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
      super(props);
      this.state = { currentValue: this.props.startWith };

      setInterval(() => {
        this.setState({ currentValue: this.state.currentValue - 1 });

      }, 1000);
  }
  render() {
    console.log('In Timer render');
    return (
        <div className="Timer">
            {this.state.currentValue}
        </div>
    );
  }

}

class App extends Component {
  render() {
    console.log('In App render');
    return (
      <div className="App">
        <Timer startWith={150}/>
      </div>
    );
  }
}

export default App;
