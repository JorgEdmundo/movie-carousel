import React from 'react';
import { shallow } from 'enzyme';

import MovieList from './MovieList';

describe('MovieList Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieList />);
    jest.clearAllMocks();
  });

  it('should render the MovieList container', () => {
    expect(wrapper.find('.categories')).toHaveLength(1);
  });

  it('should render three Carousel components', () => {
    expect(wrapper.find('Carousel')).toHaveLength(3);
  });
});
