import React from 'react';
import { shallow } from 'enzyme';
import PostList from './PostList';

describe('PostList', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<PostList />);
    expect(wrapper).toMatchSnapshot();
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<PostList onClick={handleClick} />);
    wrapper.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});