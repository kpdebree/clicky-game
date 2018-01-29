import React, { Component } from 'react';
import "./GameImage.css";
import images from "./images.json"

class GameImage extends Component {
	state = {
		score: 0,
		guessed: [],
    message: ""
	}

	handleClick(e) {
    const clicked = e.target.dataset.id
    if(this.state.score === 12){
      this.setState({
        guessed:[],
        message:"You Won!"
      })
    } else if (this.state.guessed.indexOf(clicked) > -1) {
      this.setState({
        score: 0,
        guessed: [],
        message: "You Lost!"
      })
    } else {
      this.setState({
        score: this.state.score + 1,
        guessed: this.state.guessed.concat(clicked),
        message: ""
      })
    }
	}

	render() {
    let imagesArray = [].concat(images)
    imagesArray = shuffle(imagesArray, [])
		return (
			<div className="game">
        <h2>Score: {this.state.score} <span className="message">{this.state.message}</span></h2>
				<div className="pics">
          {imagesArray.map(image => (
              <Pic 
                handleClick={this.handleClick.bind(this)}
                key={image.id}
                link={image.image}
                id ={image.id}/>
            )
          )}
        </div>
			</div>
		)
	}

}

const Pic = props => {
	return (
		<div className="card">
      <div className="img-container">
			<img 
				src={props.link}
				onClick={props.handleClick}
				alt={props.name}
				data-id={props.id}
				/>
        </div>
		</div>
	);
}

function shuffle(arr1, arr2) {
  if (arr1.length < 1) {
    return arr2
  } else {
    let randomIndex = Math.floor(Math.random() * arr1.length)
    let arr = arr1
    console.log(randomIndex)
    arr2.push(arr1[randomIndex])
    arr.splice(randomIndex, 1)
    return shuffle(arr, arr2)
  }
}

export default GameImage