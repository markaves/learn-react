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
  componentWillReceiveProps(nextProps){
      console.log('In componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(){
      console.log('In shouldComponentUpdate')
      return true;
  }
  componentWillUpdate(nextProps, nextState){
      console.log('In componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState){
      console.log('In componentDidUpdate')
  }
  componentWillUnmount(){
      console.log('In componentWillUnmount')
  }

  render(){
    return (
      <div>{this.props.greeting}</div>
      );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { greeting: "Hello"};
    setTimeout(() => {
      this.setState({ greeting: "Hi" });

    }, 5000);
  }
 
  render() {
    console.log('In App render');
    return (
      <div className="App">
        <Greeting greeting={this.state.greeting}/>
      </div>
    );
  }
}

export default App;
