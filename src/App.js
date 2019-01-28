import React, { Component } from 'react';
import think from './think.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageStyle : [
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        },
        {
          left: "0px",
          top: "0px"
        }
      ],
      image0 : false,
      image1 : false,
      image2 : false,
      image3 : false,
      image4 : false,
      image5 : false,
      image6 : false,
      image7 : false,
      image8 : false,
      image9 : false
    }
  }

  componentDidMount() {
    console.log("⠀⠰⡿⠿⠛⠛⠻⠿⣷\n ⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀\n ⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷\n" + 
    " ⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇\n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁\n\n ⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀\n ⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗\n" + 
    " ⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄\n ⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃\n ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁\n" + 
    " ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁\n ⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟\n ⠀⠀⠀⠀⠀⠉⠉⠉")

    var startTime = 12000;

    setTimeout(function() {
      setTimeout(function() { this.setState({image0: true}) }.bind(this), 4000)
      this.interval0 = setInterval(() => this.changeCoordinates(0), 4000)
    }.bind(this), startTime)

    setTimeout(function() {
      setTimeout(function() { this.setState({image1: true}) }.bind(this), 4000)
      this.interval1 = setInterval(() => this.changeCoordinates(1), 4000)
    }.bind(this), startTime + 2200)

    setTimeout(function() {
      setTimeout(function() { this.setState({image2: true}) }.bind(this), 4000)
      this.interval2 = setInterval(() => this.changeCoordinates(2), 4000)
    }.bind(this), startTime + 4400)

    setTimeout(function() {
      setTimeout(function() { this.setState({image3: true}) }.bind(this), 4000)
      this.interval3 = setInterval(() => this.changeCoordinates(3), 4000)
    }.bind(this), startTime + 6600)

    setTimeout(function() {
      setTimeout(function() { this.setState({image4: true}) }.bind(this), 4000)
      this.interval4 = setInterval(() => this.changeCoordinates(4), 4000)
    }.bind(this), startTime + 8800)

    setTimeout(function() {
      setTimeout(function() { this.setState({image5: true}) }.bind(this), 4000)
      this.interval5 = setInterval(() => this.changeCoordinates(5), 4000)
    }.bind(this), startTime + 11000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeCoordinates(ind) {
    var x = document.body.offsetWidth-100;
    var y = document.body.offsetHeight-100;
    var style = []
    for (var i = 0; i < 10; i++) {
      if (ind === i) {
        var randomX = Math.floor(Math.random()*x);
        var randomY = Math.floor(Math.random()*y);
        style.push({
          left: randomX + "px",
          top: randomY + "px",
        })
      } else {
        style.push(this.state.imageStyle[i])
      }
    }
    this.setState({
      imageStyle : style
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="notsure">not sure</h1>
        <h1 className="ru">r u?</h1>
        { this.state.image0 ? <img src={think} style={ this.state.imageStyle[0] } alt="hmm"/> : null }
        { this.state.image1 ? <img src={think} style={ this.state.imageStyle[1] } alt="hmm"/> : null }
        { this.state.image2 ? <img src={think} style={ this.state.imageStyle[2] } alt="hmm"/> : null }
        { this.state.image3 ? <img src={think} style={ this.state.imageStyle[3] } alt="hmm"/> : null }
        { this.state.image4 ? <img src={think} style={ this.state.imageStyle[4] } alt="hmm"/> : null }
        { this.state.image5 ? <img src={think} style={ this.state.imageStyle[5] } alt="hmm"/> : null }
        { this.state.image6 ? <img src={think} style={ this.state.imageStyle[6] } alt="hmm"/> : null }
        { this.state.image7 ? <img src={think} style={ this.state.imageStyle[7] } alt="hmm"/> : null }
        { this.state.image8 ? <img src={think} style={ this.state.imageStyle[8] } alt="hmm"/> : null }
        { this.state.image9 ? <img src={think} style={ this.state.imageStyle[9] } alt="hmm"/> : null }
      </div>
    );
  }
}

export default App;
