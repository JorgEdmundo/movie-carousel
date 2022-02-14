import React, { useContext, useState } from 'react';

import Button from '../../Elements/Button/Button';

import { ThemeContext } from '../../../context/ThemeContext';
import { getWishlist } from '../../../Helpers/common';

import './movieSingle.scss';

const imageAPI = process.env.IMAGE_API;

function MovieSingle({ movie }) {
  const { theme } = useContext(ThemeContext);
  const [added, setAdded] = useState(false);
  const { id, overview, title, poster_path, release_date, vote_average } =
    movie;
  const movieYear = release_date.split('-')[0];
  const poster = `${imageAPI}${poster_path}`;

  const addToWishlist = () => {
    const moviePayload = {
      id,
      title,
      poster,
      releaseDate: release_date,
      rating: vote_average,
      overview,
      genre: theme,
    };

    const currentWishlist = getWishlist();

    const isAlreadyInWishlist = currentWishlist.some((item) => item.id === id);

    if (!isAlreadyInWishlist) {
      localStorage.removeItem('wishlist');
      const newWishlist = [...currentWishlist, moviePayload];
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      setAdded(true);
    }
  };

  const ratingLevel = vote_average > 6.5 ? 'high' : 'average';

  return (
    <div className="movie-container container">
      <div className={`movie-wrapper ${theme}`}>
        <div className="movie-info">
          <div className="poster">
            <img src={poster} />
          </div>
          <div className="details">
            <h2>
              {title} <span>({movieYear})</span>
            </h2>
            <div className="description">
              <div className="genre">
                <span>{theme}</span>
              </div>
              <div className={`rating card ${ratingLevel}`}>
                <span>{`${vote_average} / 10`}</span>
              </div>
              <div className="release">
                <span>{release_date}</span>
              </div>
              <div className="btn-wishlist">
                <Button variant={theme} handleClick={addToWishlist}>
                  Add to Wishlist
                </Button>
              </div>
            </div>
            {added && <div className="message">Added to your wishlist</div>}
          </div>
        </div>
        <div className="movie-overview">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieSingle;
