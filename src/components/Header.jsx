import React from 'react'
import Avatar from '../assets/user-avatar.png'
import '../styles/Header.css'

const Nav = ({ title }) => {
  return (
    <div className='nav'> 
      <a href="#" className='nav-link'>{title}</a>
    </div>
  )
}

const GoogleApps = () => {
  return (
    <div className='google-apps'>
      <i className="material-symbols-outlined">apps</i>
    </div>
  )
}

const UserAvatar = () => {
  return (
    <div className="user-avatar">
      <img src={Avatar} alt="User Avatar" className='avatar' />
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <nav>
        <Nav title='Gmail' />
        <Nav title='Images' />
        <GoogleApps />
        <UserAvatar />
      </nav>
    </header>
  )
}

export default Header