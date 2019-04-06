import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home.js'
import './App.css'
import ConnectedCategoryDetailsContainer from './categoryDetails/categoryDetailsContainer';
import CategoryNavigation from './components/categoryNavigation/categoryNavigation';

class App extends Component {
  render() {
    return (
      <div className={'app-container'}>
       <h3 className={'app-container__heading'}>Categories</h3> 
       <CategoryNavigation/>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/:categoryId" component={ConnectedCategoryDetailsContainer} />
        </main>
      </div>
    )
  }
}

export default App
