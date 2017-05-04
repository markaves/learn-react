import React, { Component } from 'react';


class Greeting extends Component {
  componentWillMount(){
      console.log('In componentWillMount')
      //debugger;
  }
  componentDidMount(){
      console.log('In componentDidMount')
      //debugger;
  }
  componentWillReceiveProps(){
      console.log('In componentWillReceiveProps')
  }
  shouldComponentUpdate(){
      console.log('In shouldComponentUpdate')
      return true;
  }
  componentWillUpdate(){
      console.log('In componentWillUpdate')
  }
  componentDidUpdate(){
      console.log('In componentDidUpdate')
  }
  componentWillUnmount(){
      console.log('In componentWillUnmount')
  }

  render(){
    return (
      <div>Hello</div>
      );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { showGreeting: true};
    setTimeout(() => {
      this.setState({ showGreeting: false });

    }, 5000);
  }
 
  render() {
    console.log('In App render');
    return (
      <div className="App">
        { this.state.showGreeting && <Greeting /> }
      </div>
    );
  }
}

export default App;
