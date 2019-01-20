import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={()=>{}} />);
  expect(wrapper).toMatchSnapshot();
});

const startLogout =jest.fn();
const wrapper = shallow(<Header startLogout={startLogout} />);
test('call start log in on button click',()=>{
  wrapper.find('button').simulate('click');
  expect(startLogout).toBeCalled();
});