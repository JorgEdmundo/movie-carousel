import React, { useContext, useState } from 'react';

import Header from '../components/Elements/Header/Header';
import MovieList from '../components/UI/MovieList/MovieList';
import MovieSingle from '../components/UI/MovieSingle/MovieSingle';
import Wishlist from '../components/UI/Wishlist/Wishlist';

import { getAllMovies, getWishlist } from '../Helpers/common';

import { NavigationContext } from '../context/NavigationContext';

function PageManager() {
  const { page, movieId } = useContext(NavigationContext);

  const allMovies = getAllMovies();
  const wishlist = getWishlist();
  let selectedMovie = {};

  if (allMovies.length) {
    selectedMovie = allMovies.find((movie) => movie.id === movieId);
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          {page === 'home' && <MovieList />}
          {page === 'movie' && <MovieSingle movie={selectedMovie} />}
          {page === 'wishlist' && <Wishlist wishlistItems={wishlist} />}
        </div>
      </div>
    </>
  );
}

export default PageManager;
