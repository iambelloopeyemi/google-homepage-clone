import React from 'react'
import Avatar from '../assets/profile-avatar.png'
import '../styles/Header.css'

const NavItem = ({ title }) => {
  return (
    <div className="nav-item"> 
      <a href="#">{title}</a>
    </div>
  )
}

const AppLauncher = () => {
  return (
    <div className="app-launcher">
      <i className="material-symbols-outlined">apps</i>
    </div>
  )
}

const UserAvatar = () => {
  return (
    <div className="profile-avatar">
      <img src={Avatar} alt="profile avatar" />
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <NavItem title="Gmail" />
        <NavItem title="Images" />
        <AppLauncher />
        <UserAvatar />
      </div>
    </header>
  )
}

export default Header
