import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('loading page is rendered correctly',()=>{
    const wrapper=shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
});