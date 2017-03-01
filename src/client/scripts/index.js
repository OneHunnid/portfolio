import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Main Layout
import MainLayout from './containers/MainLayout'

// Routes
import Home from './routes/Home'
import PortfolioWork from './routes/PortfolioWork'
import PortfolioPhotography from './routes/PortfolioPhotography'
import NotFound from './routes/NotFound'

// App entry point
const app = document.querySelector('.root');

// Render the DOM
ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="portfolio/work/:portfolio_id" component={PortfolioWork} />
      <Route path="portfolio/photography/:portfolio_id" component={PortfolioPhotography} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  app
);
