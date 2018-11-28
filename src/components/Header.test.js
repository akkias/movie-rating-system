import React from 'react';
import { mount } from 'enzyme';
import Header from './Header'


describe('<Header />', () => {
    const header = mount(<Header />);
    it('<Header /> Renders correctly', () => {
        expect(<header />).toMatchSnapshot();
    })
  
})
