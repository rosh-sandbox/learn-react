// Write JavaScript here and press Ctrl+Enter to execute

class Button extends React.Component {

  state = {counter : 32};  
 
  clickHandler = () => {
      this.props.onClick(this.props.incrementValue);
  }
 
	render() {
    return (
      <button onClick={this.clickHandler}>
      	+{this.props.incrementValue}
      </button>    
    );
  }
  
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  );
};

class App extends React.Component {
	state = {counter : 0};
  
  incrementCounter = (incrementValue) => {
  	this.setState((prevState) => ({
      	counter : prevState.counter + incrementValue
      })
    );   
  };

	render() {
  	return (
    	<div>
    	  <Button onClick={this.incrementCounter} incrementValue={1}/>
        <Button onClick={this.incrementCounter} incrementValue={5}/>
        <Button onClick={this.incrementCounter} incrementValue={10}/>
        <Button onClick={this.incrementCounter} incrementValue={100}/>
        <Result counter={this.state.counter}/>
    	</div>
    );
  }
};

ReactDOM.render(<App/>, mountNode);
