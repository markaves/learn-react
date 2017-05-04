import React, { Component } from 'react';


const Timer = ({currentValue, resetTimerFunction}) => {
    return (
        <div className="Timer" onClick={resetTimerFunction}>
            {currentValue}
        </div>
    );
  }


class App extends Component {
  constructor(props){
    super(props);
      this.state = { currentValue: 150 };

      setInterval(() => {
        this.setState({ currentValue: this.state.currentValue - 1 });

      }, 1000);
  }
  resetTimer = () => {
    this.setState({ currentValue: 150 });
  }

  render() {
    console.log('In App render');
    return (
      <div className="App">
        <Timer currentValue={this.state.currentValue}
            resetTimerFunction={this.resetTimer}
        />
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default App;
