import React, { useContext } from 'react';

import { NavigationContext } from '../../../context/NavigationContext';
import { ThemeContext } from '../../../context/ThemeContext';

import { getRatingLevel } from '../../../Helpers/constants';

import './movieCard.scss';

function MovieCard({ poster, title, releaseDate, rating, genre, movieId }) {
  const { setPage, setMovieId } = useContext(NavigationContext);
  const { setTheme } = useContext(ThemeContext);

  const ratingLevel = getRatingLevel(rating);

  const goToSingle = () => {
    setPage('movie');
    setMovieId(movieId);
    setTheme(genre.toLowerCase());
  };

  return (
    <div className="movie-card">
      <div onClick={goToSingle} className="image">
        <img src={poster} />
      </div>
      <div className="content">
        <div className={`rating card ${ratingLevel}`}>
          <span>{`${rating} / 10`}</span>
        </div>
        <h2 onClick={goToSingle}>{title}</h2>
        <span>{releaseDate}</span>
      </div>
    </div>
  );
}

export default MovieCard;
