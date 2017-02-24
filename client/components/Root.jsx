import React from 'react'
import Home from './Home'
import TracksContainer from '../containers/TracksContainer'
import About from './About'
// import NotFound from './NotFound'
import PlaylistsContainer from '../containers/PlaylistsContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderContainer from '../containers/HeaderContainer'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(ReduxThunk)
  ))

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app'>

            <HeaderContainer />

            <div className='content'>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/playlists' component={PlaylistsContainer} />
              <Route path='/tracks/:ownerId/:playlistId' component={TracksContainer} />
              <Route path='/api/auth/spotify' render={() => {}} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}
