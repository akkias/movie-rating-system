import React from 'react';
import { mount } from 'enzyme';
import Header from './Header'

const header = mount(<Header />);

describe('<Header />', () => {
    it('<Header /> Renders correctly', () => {
        expect(<header />).toMatchSnapshot();
    })
  
})
