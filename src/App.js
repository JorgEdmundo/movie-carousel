import React from 'react';
import { render } from 'react-dom';

import PageManager from './PageManager/PageManager';

import NavigationProvider from './context/NavigationContext';
import ThemeProvider from './context/ThemeContext';

import './styles/globals.scss';

const rootElement = document.getElementById('root');

const App = () => (
  <>
    <NavigationProvider>
      <ThemeProvider>
        <PageManager />
      </ThemeProvider>
    </NavigationProvider>
  </>
);

render(<App />, rootElement);
