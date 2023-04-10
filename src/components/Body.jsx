import { useState } from 'react'
import { languages } from './List'
import googleLogo from '../assets/google-logo.png'
import googleMicIcon from '../assets/google-mic-icon.png'
import googleLensIcon from '../assets/google-lens-icon.png'
import '../styles/Body.css'

const LogoSection = () => {
  return (
    <div className='logo-container'>
      <img src={googleLogo} alt="Google Logo" className='logo' />
    </div>
  )
}

const SearchBar = () => {
  return (
    <form action="#" className='search-field-wrapper' >
      <i className="material-symbols-outlined search-icon">search</i>
      <input type='search' className='search-field' />
      <img src={googleMicIcon} alt="Google Mic Icon" className='google-mic-icon' />
      <img src={googleLensIcon} alt="Google Mic Icon" className='google-lens-icon' />
    </form>
  )
}

const SearchSection = () => {
  return (
    <div className='search-section'>
      <SearchBar />
    </div>
  )
}

const Button = ({ children }) => {
  return (
    <div>
      <button className='btn'>{children}</button>
    </div>
  )
}

const ButtonSection = () => {
  return (
    <div className='btn-section'>
      <Button>Google Search</Button>
      <Button>I'm Feeling Lucky</Button>
    </div>
  )
}

const LanguagesSection = () => {
  
  const languagesOptions = languages.map((language, index) => {
    return <li key={index}><a href="#" className='language'>{language}</a></li>
  });

  return (
    <div className='languages-section'> 
      <p className='languages-offering'>Google offered in:</p>
      <ul className='languages-options'>{languagesOptions}</ul>
    </div>
  )
}

const Body = () => {
  return (
    <main>
      <LogoSection />
      <SearchSection />
      <ButtonSection />
      <LanguagesSection />
    </main>
  )
}

export default Body