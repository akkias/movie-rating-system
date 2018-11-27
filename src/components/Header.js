import React, {useState} from 'react';
import {getRandomNum} from '../utils/functionUtils'

export const Header = (props) => {
    let setTM;
    const [randomRating, setRR] = useState(false);

    async function setRandomRating() {
        try {
            let min = 5, max = 10;
            var myFunction = function() {
                props.setRandomRatingFunc(getRandomNum(5),getRandomNum(12), getRandomNum(12));
                let randomTime = Math.round(Math.random() * (max - min + 1) + min);
                setTM = setTimeout(myFunction, randomTime * 1000);
            }
            await myFunction();
        }
        catch (err) {
            console.log('fetch failed', err);
        }
    } 
    const stopRandomRating = () => {
        clearTimeout(setTM);
    }
    

    return(
        <div className="header">
            <h1>Movie Rating App</h1>
            {!randomRating ? 
            <button className="random-rating-btn" onClick={() => {setRandomRating(); setRR(true)}}>
                <i className="fas fa-star"></i>Random Rating
            </button>
            :
            <button className="random-rating-btn" onClick={() => {stopRandomRating(); setRR(false   )}}>
                <i className="fas fa-sync fa-spin"></i>Stop Random Rating
            </button>
            }
        </div>
    )
}

export default Header;