import React, {useState} from 'react';
import {getRandomNum} from '../utils'

export const Header = (props) => {
    let setTM;
    const [randomRating, setRR] = useState(false);

    const setRandomRating = () => {
        setRR(true);
        var myFunction = function() {
            props.setRating(getRandomNum(5),getRandomNum(12));
            let randomTime = Math.round(Math.random() * (10000 - 4000)) + 500;
            setTM = setTimeout(myFunction, randomTime);
        }
        myFunction();
    } 
    const stopRandomRating = () => {
        clearTimeout(setTM);
        setRR(false);
    }
    return(
        <div className="header">
            <h1>Movie Rating App</h1>
            {!randomRating ? 
            <button className="random-rating-btn" onClick={setRandomRating}>
                <i className="fas fa-star"></i>Random Rating
            </button>
            :
            <button className="random-rating-btn" onClick={stopRandomRating}>
                <i className="fas fa-sync fa-spin"></i>Stop Random Rating
            </button>
            }
        </div>
    )
}

export default Header;