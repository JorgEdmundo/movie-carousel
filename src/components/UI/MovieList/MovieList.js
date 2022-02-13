import React, { useState, useEffect } from 'react';

import Carousel from '../Carousel/Carousel';

import './movieList.scss';

const KEY = process.env.TMDB_KEY;

function ListCampaign() {
  const [actionMovies, setActionMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [animatedMovies, setAnimatedMovies] = useState([]);

  useEffect(() => {
    const moviesPromises = [28, 16, 27].map((genre) =>
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genre}`,
      ).then((res) => res.json()),
    );
    Promise.all(moviesPromises).then((dataSets) => {
      const [action, animated, horror] = dataSets;

      setActionMovies(action.results);
      setAnimatedMovies(animated.results);
      setHorrorMovies(horror.results);

      const allMovies = [
        ...action.results,
        ...animated.results,
        ...horror.results,
      ];

      if (allMovies.length) {
        localStorage.setItem('allMovies', JSON.stringify(allMovies));
      }
    });
  }, []);
  return (
    <>
      <div className="categories container">
        <div className="category">
          <Carousel genre="action" movies={actionMovies} />
        </div>
        <div className="category">
          <Carousel genre="horror" movies={horrorMovies} />
        </div>
        <div className="category">
          <Carousel genre="animated" movies={animatedMovies} />
        </div>
      </div>
    </>
  );
}

export default ListCampaign;
