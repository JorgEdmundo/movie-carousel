import React, { createContext, useState } from 'react';

export const ThemeContext = createContext('');

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('');

  const { children } = props;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
