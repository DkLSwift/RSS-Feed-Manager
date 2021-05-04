import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'

import { Navbar, Footer, ToTopButton } from './components'

import { defaultRSS } from './constants/default-rss'
import { Home, SearchFeed, DiscoverFeed, NotFound } from './pages'

import { darkOrangeColors } from './components/Theme'
import { ThemeProvider } from "styled-components";

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
