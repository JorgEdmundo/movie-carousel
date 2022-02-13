import React from 'react';

import MovieCard from '../../Elements/MovieCard/MovieCard';

import './wishlist.scss';

function Wishlist({ wishlistItems }) {
  return (
    <div className="wishlist">
      <h2 className="title">Your Wishlist</h2>
      <div className="wishlist-wrap">
        {wishlistItems.length ? (
          <>
            {wishlistItems.map((item) => {
              const {
                poster,
                id,
                overview,
                title,
                rating,
                releaseDate,
                genre,
              } = item;
              return (
                <MovieCard
                  key={id}
                  movieId={id}
                  poster={poster}
                  title={title}
                  rating={rating}
                  overview={overview}
                  releaseDate={releaseDate}
                  genre={genre}
                />
              );
            })}
          </>
        ) : (
          <p>You have no movies in your wishlist</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
