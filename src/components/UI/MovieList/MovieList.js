import React, { useState, useEffect } from 'react';

import Carousel from '../Carousel/Carousel';

import { getMoviesByCategories } from '../../../Helpers/dataCalls';
import { KEY, movieCategories } from '../../../Helpers/constants';

import './movieList.scss';

function ListCampaign() {
  const [actionMovies, setActionMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [animatedMovies, setAnimatedMovies] = useState([]);

  useEffect(() => {
    getMoviesByCategories(KEY, movieCategories).then(
      ([action, animated, horror]) => {
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
      },
    );
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
