// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
      count: 0,
    };
  
  if (count > 0){ 
    const {count} = this.state;
    onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 10}));
  };
};

if(count < 200){ 
  const {count} = this.state;
  onDecrease = () => {
    this.setState(prevState => ({count: prevState.count - 10}));
  }
};

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="img"
        />
        <h4 className="speed-count">Speed is {count}mph</h4>
        <p className="disc">Min Limit is 0mph,Max Limit is </p>
        <div>
          <button
            type="button"
            className="button-inc"
            onClick={this.onIncrease}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button-dec"
            onClick={this.onDecrease}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
