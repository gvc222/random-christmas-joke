import './App.css';
import React  from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    joke: "",
    answer: ""
  }

  componentDidMount() {
    this.fetchJoke();
  }


  fetchJoke = () => {
    // Axios is a library used to send async HTTP requests to REST endpoints
    axios.get("https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
      .then((res) => {
        const joke = res.data.setup
        const answer = res.data.delivery
        this.setState({
          joke: joke,
          answer: answer
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
render() {
  // either declare this line and use {joke} in the h1 element, or use {this.state.joke} within the h1 element.
  // const { joke } = this.state
  return (
    <div className="app">
      <div className="card">
        <h3 className='header'>{this.state.joke}</h3>
        <h5 className="answer">{this.state.answer}</h5>
        <button className="button" onClick={this.fetchJoke}>
          Tell me a Christmas Joke!
        </button>
      </div>
      
    </div>

  )
  }
}
export default App;
