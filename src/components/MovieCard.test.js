import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard'

const movieCard = shallow(<MovieCard />);

test('<MovieCard /> Renders correctly', () => {
    expect(<movieCard />).toMatchSnapshot();
})