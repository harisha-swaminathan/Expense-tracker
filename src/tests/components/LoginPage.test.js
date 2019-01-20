import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('should render login page correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

const startLogin =jest.fn();
const wrapper = shallow(<LoginPage startLogin={startLogin} />);

test('call startLogin on button click',()=>{
  wrapper.find('button').simulate('click');
  expect(startLogin).toBeCalled();
});