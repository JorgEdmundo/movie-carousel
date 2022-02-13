import React, { createContext, useState } from 'react';

export const NavigationContext = createContext('');

const NavigationProvider = (props) => {
  const [page, setPage] = useState('home');
  const [movieId, setMovieId] = useState('');

  const { children } = props;

  return (
    <NavigationContext.Provider value={{ page, setPage, movieId, setMovieId }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
