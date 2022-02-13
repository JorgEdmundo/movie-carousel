import React from 'react';
import { shallow } from 'enzyme';

import { movies } from '../../../Helpers/mockData';

import MovieSingle from './MovieSingle';

describe('MovieSingle Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieSingle movie={movies[0]} genre="animated" />);
    jest.clearAllMocks();
  });

  it('should render the movie container', () => {
    expect(wrapper.find('.movie-container')).toHaveLength(1);
  });

  it('should render the image tag', () => {
    expect(wrapper.find('.poster img')).toHaveLength(1);
  });

  it('should render the poster image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(
      `${process.env.IMAGE_API}${movies[0].poster_path}`,
    );
  });

  it('should render movie title', () => {
    expect(wrapper.find('h2').text()).toEqual('Encanto (2021)');
  });

  it('should render the release date', () => {
    expect(wrapper.find('.release span').text()).toEqual('Release: 2021-11-24');
  });

  it('should render movie rating', () => {
    expect(wrapper.find('.rating span').text()).toEqual('7.8 / 10');
  });

  it('should render the Add to wishlist Button', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should render the movie overview', () => {
    expect(wrapper.find('p').text()).toEqual(movies[0].overview);
  });
});
