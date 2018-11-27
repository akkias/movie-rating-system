import React from 'react';
import { shallow } from 'enzyme';
import { Movies } from './Movies';

describe('Movies', () => {
    const props = {movies: {
                    "movies": [
                        {
                            "id": 7,
                            "title": "Blindspotting",
                            "rating": 4,
                            "poster": "blindspotting.jpg"
                        },
                        {
                            "id": 8,
                            "title": "A Quiet Place",
                            "rating": 3,
                            "poster": "a_quiet_place.jpg"
                        }
                    ]
                }
            }
    const movies = shallow(<Movies {...props} />);

    it('Renders properly', () => {
        expect(movies).toMatchSnapshot();
    });
    it('Contains <Header /> component', () => {
        expect(movies.find('Header').exists().toBe(true));
    });

    it('Contains a connected <MovieCard /> component', () => {
        expect(movies.find('Connect(MovieCard)').exists().toBe(true));
    });

})
