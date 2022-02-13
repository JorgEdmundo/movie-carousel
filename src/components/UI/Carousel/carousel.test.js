import React from 'react';
import { shallow } from 'enzyme';

import { movies } from '../../../Helpers/mockData';

import Carousel from './Carousel';

describe('Carousel Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Carousel movies={movies} genre="action" />);
    jest.clearAllMocks();
  });

  it('should render genre as a title', () => {
    expect(wrapper.find('h2').text()).toEqual('action');
  });

  it('should render the carousel container', () => {
    expect(wrapper.find('.carousel-container')).toHaveLength(1);
  });

  it('should render three movie cards', () => {
    expect(wrapper.find('MovieCard')).toHaveLength(3);
  });
});
