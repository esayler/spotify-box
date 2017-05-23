import React from 'react'
import axios from 'axios'
import { Column, Table } from 'react-virtualized'
import { BrowserRouter as Router, Route, Link, BrowserHistory } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'

export default class Header extends React.Component {

  handleLogin(e) {
    BrowserHistory.push('api/auth/spotify')
  }

  handleLogout() {
    this.props.removeActiveUser()
    BrowserHistory.push('api/logout')
  }

  componentDidMount() {
    this.props.getActiveUser()
  }

  render() {
    const user = this.props.activeUser
      ? (<div className='user-profile-display'>
        <div className='user-profile-id'>{this.props.activeUser.id}</div>
          <Link onClick={this.handleLogout.bind(this)} to='/api/logout' className='button logout-button'>Log Out</Link>
        </div>)
      : <Link onClick={this.handleLogin.bind(this)} to='/api/auth/spotify' className='btn btn-login'>Login with Spotify</Link>

    return (
      <div className='header-container'>
        <div className='header'>
          <div className='header-content'>
            <Link to='/playlists' className='navbar-title title'><h1>rn.spt</h1></Link>

            <nav className='navigation nav'>
              {/* <Link to='/'>Home</Link> */}
              {/* <Link to='/about'>About</Link> */}
              <Link to='/playlists'>Playlists</Link>
              <Link to='/tracks'>Tracks</Link>
              {user}
            </nav>
          </div>
        </div>
        <LoadingBar className='loading-bar' />
      </div>
    )
  }
}
