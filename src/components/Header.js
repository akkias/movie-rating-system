import React, {Component} from 'react';
import {getRandomNum} from '../utils/functionUtils'
import {handleRatingChange} from '../utils/apiUtils'
import {setRating} from '../actions';

let setTM;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomRating: false
        }
    }

    setRandomRating = async (props) => {
        try {
            let min = 5, max = 10;
            this.setState({
                randomRating: !this.state.randomRating
            })
            var myFunction = function() {
                let randRating = getRandomNum(5);
                let randIndex = getRandomNum(11);
                let randId = getRandomNum(12);
                handleRatingChange(randRating,randIndex, randId)
                .then(props.store.dispatch(setRating(randRating, randIndex, randId)));
                let randomTime = Math.round(Math.random() * (max - min + 1) + min);
                setTM = setTimeout(myFunction, randomTime * 1000);
            }
            await myFunction();
        }
        catch (err) {
            console.log('fetch failed', err);
        }
    } 
    stopRandomRating = () => {
        this.setState({
            randomRating: !this.state.randomRating
        })
        clearTimeout(setTM);
    }
    
render() {
        return(
            <div className="header">
                <h1>Movie Rating App</h1>
                {!this.state.randomRating ? 
                <button className="random-rating-btn random-rating-start" onClick={() => this.setRandomRating(this.props)}>
                    <i className="fas fa-star"></i>Random Rating
                </button>
                :
                <button className="random-rating-btn random-rating-stop" onClick={this.stopRandomRating}>
                    <i className="fas fa-sync fa-spin"></i>Stop Random Rating
                </button>
                }
            </div>
        )
    }
}

export default Header;