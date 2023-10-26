import './App.css';
import React  from 'react';
import axios from 'axios';

class App extends React.Component {

  // const [ advice, setAdvice ] = useState("Click the button to generator random advice");
  state = {
    advice: ""
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice`)
      .then((res) => {
        const { advice } = res.data.slip
        this.setState({ advice })
      })
      .catch((err) => {
        console.log(err);
      })
  }
render() {
  // either declare this and use {advice} in the h1 element, or use {this.state.advice} within the h1 element.
  // const { advice } = this.state
  return (
    <div className="app">
      <div className="card">
        <h1 className='header'>{this.state.advice}</h1>
        <button className="button" onClick={this.fetchAdvice}>Generate Advice</button>
      </div>
    </div>

  )
  }
}
export default App;
