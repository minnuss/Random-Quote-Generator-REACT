import React from 'react';
import axios from 'axios'
import './App.css';

// ADVICE SLIP JSON API URL
// https://api.adviceslip.com/

// CLASS COMPONENT

const apiURL = 'https://api.adviceslip.com/advice'
// const randomNum = Math.floor(Math.random() * 217)
// console.log(apiURL + randomNum)

class App extends React.Component {

  state = {
    advice: ''
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get(apiURL)
      .then(response => {
        const { advice } = response.data.slip
        // console.log(advice)
        this.setState({ advice: advice })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {

    const { advice } = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className='heading'> {advice}</h1 >
          <button className='btn' onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE</span>
          </button>
          <small>Wait for 5 seconds</small>
          <small>before calling new advice</small>
        </div>
      </div>
    )
  }

}

export default App;
