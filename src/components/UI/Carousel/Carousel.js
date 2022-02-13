import React from 'react';

import MovieCard from '../../Elements/MovieCard/MovieCard';

import './carousel.scss';

const imageAPI = process.env.IMAGE_API;

function Carousel({ genre, movies }) {
  return (
    <section className="carousel-container">
      <div className="carousel-header">
        <h2>{genre}</h2>
      </div>
      <div className="scroller-wrap">
        <div className="scroller-list scroller-flex">
          {movies.map((movie) => {
            const {
              poster_path,
              id,
              overview,
              title,
              vote_average,
              release_date,
            } = movie;
            const poster = `${imageAPI}${poster_path}`;

            return (
              <MovieCard
                key={id}
                movieId={id}
                poster={poster}
                title={title}
                rating={vote_average}
                overview={overview}
                releaseDate={release_date}
                genre={genre}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
