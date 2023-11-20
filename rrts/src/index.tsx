import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  state = {counter: 0};

  onIncrease = (): void => {
    this.setState({ counter: this.state.counter + 1});
  };

  onDecrease = (): void => {
    this.setState({ counter: this.state.counter - 1});
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrease}>Increase</button><br/>
        <button onClick={this.onDecrease}>Decrease</button><br/>
        { this.state.counter} 
      </div>    
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
