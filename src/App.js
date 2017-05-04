import React, { Component } from 'react';


const Timer = ({currentValue}) => {
    return (
        <div className="Timer">
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
        <Timer currentValue={this.state.currentValue}/>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default App;
