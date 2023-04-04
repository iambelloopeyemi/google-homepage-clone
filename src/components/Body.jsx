import React from 'react'
import GoogleLogo from '../assets/google-logo.png'
import GoogleMicIcon from '../assets/google-mic-icon.png'
import GoogleLensIcon from '../assets/google-lens-icon.png'
import '../styles/Body.css'

const Logo = () => {
  return (
    <div>
      <img src={GoogleLogo} alt="google logo" className="logo" />
    </div>
  )
}

const SearchField = () => {
  return (
      <form action="#" className="search-field-wrapper" >
          <i className="material-symbols-outlined">search</i>
          <input type="search" className="search-field" />
          <img src={GoogleMicIcon} alt="google mic icon" className="google-mic-icon" />
          <img src={GoogleLensIcon} alt="google mic icon" className="google-lens-icon" />
      </form>
  )
}

const SearchSection = () => {
  return (
    <div className="search-section">
      <SearchField />
    </div>
  )
}

const Button = ( {FirstButtonTitle, SecondButtonTitle } ) => {
  return (
    <div className="btn-container">
      <button className="first-btn">{FirstButtonTitle}</button>
      <button className="second-btn">{SecondButtonTitle}</button>
    </div>
  )
}

const Languages = () => {
  return (
    <div className="languages-wrapper"> 
      <p>Google offered in:</p>
      <span className="languages">
          <a href="#" className="language">Hausa</a>
          <a href="#" className="language">Igbo</a>
          <a href="#" className="language">Ede Yoruba</a>
          <a href="#" className="language">Nigeria Pidgin</a>
        </span>
    </div>
  )
}

const Body = () => {
  return (
    <div>
      <Logo />
      <SearchSection />
      <Button FirstButtonTitle="Google Search" SecondButtonTitle="I'm Feeling Lucky" />
      <Languages />
    </div>
  )
}

export default Body
