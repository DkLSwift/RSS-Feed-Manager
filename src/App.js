import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'

import Navbar from './components/navbar'
import Footer from './components/footer'

import { defaultRSS } from './constants/default-rss'
import { Home } from './pages/home';
import { SearchFeed } from './pages/search-feed';
import { DiscoverFeed } from './pages/discover-feed';
import { NotFound } from './pages/not-found'

import { dephtsOfWater, blueberry, darkOrangeColors } from './components/Theme'
import { ThemeProvider } from "styled-components";
import ToTopButton from './components/to-top-button';

const ThemeColors = {
  darkOrangeColors: 'darkOrangeColors',
  blueberry: 'blueberry',
  dephtsOfWater: 'dephtsOfWater'
};

function App() {

  const feedStr = 'rss-feed-manager'
  const themeStr = 'rss-feed-manager-theme'
  const feeds = JSON.parse(localStorage.getItem(feedStr))

  const localTheme = JSON.parse(localStorage.getItem(themeStr))
  const [theme, setTheme] = useState(localTheme ? localTheme : darkOrangeColors);
  

  if (feeds === null) {
    localStorage.setItem(feedStr, JSON.stringify(defaultRSS))
  } 
  

  useEffect(() => {
    if (theme === null) {
      localStorage.setItem(themeStr, JSON.stringify(darkOrangeColors))
    } else {
      localStorage.setItem(themeStr, JSON.stringify(theme))
    }
  }, [theme])

  

  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
      <Navbar setTheme={setTheme} themeColors={ThemeColors} />
      <Switch>
        <Route path={ROUTES.HOME} exact> 
          <Home />
        </Route>
        <Route path={ROUTES.SEARCH_FEEDS} exact> 
          <SearchFeed />
        </Route>
        <Route path={ROUTES.DISCOVER_FEEDS} exact> 
          <DiscoverFeed />
        </Route>
        <Route path={ROUTES.NOT_FOUND}>
          <NotFound />
        </Route>
      </Switch>
      <ToTopButton />
      <Footer />
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
