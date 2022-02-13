import React from 'react';
import { shallow } from 'enzyme';

import { movies } from '../../../Helpers/mockData';

import MovieCard from './MovieCard';

describe('MovieCard Component', () => {
  let wrapper;

  const { poster_path, title, release_date, vote_average, id } = movies[0];
  const imageAPI = process.env.IMAGE_API;
  const poster = `${imageAPI}${poster_path}`;

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard
        poster={poster}
        title={title}
        releaseDate={release_date}
        rating={vote_average}
        genre="animated"
        movieId={id}
      />,
    );
    jest.clearAllMocks();
  });

  it('should render the the movie card container', () => {
    expect(wrapper.find('.movie-card')).toHaveLength(1);
  });

  it('should render an image tag', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should render an image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(`${poster}`);
  });

  it('should render the movie title', () => {
    expect(wrapper.find('h2').text()).toEqual('Encanto');
  });

  it('should render the movie rating', () => {
    expect(wrapper.find('.rating').text()).toEqual(`${vote_average} / 10`);
  });
});
