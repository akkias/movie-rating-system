import React from 'react';
import { mount } from 'enzyme';
import MovieCard from './MovieCard'
import {setRating} from '../actions';
const fetchMock = require('fetch-mock');



describe('<MovieCard />', () => {

    const props = {'movies': [{
                        "id": 1,
                        "title": "Mission: Impossible - Fallout",
                        "rating": 4,
                        "poster": "mi.jpg"
                        }]
                    }
    const movieCard = mount(<MovieCard {...props} />);
    it('<movieCard /> Renders correctly', () => {
        expect(<movieCard />).toMatchSnapshot();
    });

    it('fires the function to rate the movie', () => {
        const expectedAction = {type: 'SET_RATING', payload:{id:1,index:2,rating:3}};
        expect(setRating(3,2,1)).toEqual(expectedAction);
    })

    fetchMock.restore();
})
