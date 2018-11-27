import React from 'react';
import { mount } from 'enzyme';
import Movies from './Movies'

const movies = mount(<Movies />);

describe('<Movies />', () => {
    it('<Movies /> Renders correctly', () => {
        expect(<movies />).toMatchSnapshot();
    })
  
})
