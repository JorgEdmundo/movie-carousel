import React from 'react';
import { shallow } from 'enzyme';

import { movies } from '../../../Helpers/mockData';

import Wishlist from './Wishlist';

describe('Wishlist Component', () => {
  let wrapper;
  let wrapperEmpty;

  beforeEach(() => {
    wrapper = shallow(<Wishlist wishlistItems={movies} />);
    wrapperEmpty = shallow(<Wishlist wishlistItems={[]} />);
    jest.clearAllMocks();
  });

  it('should render the wishlist container', () => {
    expect(wrapper.find('.wishlist')).toHaveLength(1);
  });

  it('should render the wishlist title', () => {
    expect(wrapper.find('h2').text()).toEqual('Your Wishlist');
  });

  it('should render three movie cards', () => {
    expect(wrapper.find('MovieCard')).toHaveLength(3);
  });

  it('should empty message if there are no movies in the Wishlist', () => {
    expect(wrapperEmpty.find('p').text()).toEqual(
      'You have no movies in your wishlist',
    );
  });
});
