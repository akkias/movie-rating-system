import React, {useState} from 'react';
import {getRandomNum} from '../utils'

export const Header = (props) => {
    let setTM;
    const [randomRating, setRR] = useState(false);

    async function setRandomRating() {
        try {
            setRR(true);
            let min = 5, max = 10;
            var myFunction = function() {
                props.setRating(getRandomNum(5),getRandomNum(12), getRandomNum(12));
                let randomTime = Math.round(Math.random() * (max - min + 1) + min);
                console.log(randomTime)
                setTM = setTimeout(myFunction, randomTime * 1000);
            }
            await myFunction();
            console.log('here')
        }
        catch (err) {
            console.log('fetch failed', err);
        }
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